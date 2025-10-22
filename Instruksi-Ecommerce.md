# Panduan Lengkap Membuat Website E-Commerce

## Daftar Isi
1. [Prerequisites](#prerequisites)
2. [Phase 1: Setup Project](#phase-1-setup-project)
3. [Phase 2: Database Setup](#phase-2-database-setup)
4. [Phase 3: Frontend Customer](#phase-3-frontend-customer)
5. [Phase 4: Payment Integration](#phase-4-payment-integration)
6. [Phase 5: Admin Panel](#phase-5-admin-panel)
7. [Phase 6: Testing & Deployment](#phase-6-testing--deployment)

---

## Prerequisites

Sebelum memulai, pastikan sudah install:
- **Node.js** (v18+) - [Download](https://nodejs.org)
- **Git** - [Download](https://git-scm.com)
- **VS Code** (optional) - [Download](https://code.visualstudio.com)
- Accounts gratis:
  - **Supabase** - [Daftar](https://supabase.com)
  - **Midtrans/Xendit** (untuk payment) - [Midtrans](https://midtrans.com) atau [Xendit](https://xendit.co)
  - **Vercel** (untuk deploy) - [Daftar](https://vercel.com)

---

## Phase 1: Setup Project

### Step 1.1: Create Project dengan Next.js
```bash
npx create-next-app@latest ecommerce-app --typescript --tailwind
cd ecommerce-app
npm install
```

Pilih opsi:
- TypeScript: Yes
- ESLint: Yes
- Tailwind CSS: Yes
- App Router: Yes

### Step 1.2: Install Dependencies Penting
```bash
npm install @supabase/supabase-js
npm install axios
npm install react-hot-toast
npm install zustand
npm install next-auth
```

### Step 1.3: Setup Environment Variables
Buat file `.env.local` di root project:
```
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SERVICE_ROLE_KEY
MIDTRANS_SERVER_KEY=YOUR_MIDTRANS_SERVER_KEY
MIDTRANS_CLIENT_KEY=YOUR_MIDTRANS_CLIENT_KEY
```

### Step 1.4: Project Structure
```
ecommerce-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (Home)
│   │   ├── products/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── order-history/
│   │   └── admin/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── Cart.tsx
│   │   └── AdminPanel.tsx
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── payment.ts
│   │   └── auth.ts
│   └── types/
│       └── index.ts
├── .env.local
└── package.json
```

---

## Phase 2: Database Setup (Supabase)

### Step 2.1: Buat Project di Supabase
1. Login ke [Supabase](https://supabase.com)
2. Click "New Project"
3. Isi nama project, password, region
4. Tunggu project create (~2 menit)

### Step 2.2: Buat Tables
Di Supabase SQL Editor, jalankan queries ini:

#### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT auth.uid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  address TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
```

#### Products Table
```sql
CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  stock INT DEFAULT 0,
  image_url TEXT,
  category VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
```

#### Orders Table
```sql
CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  total_price DECIMAL(10, 2) NOT NULL,
  payment_method VARCHAR(50), -- 'online' or 'cod'
  payment_status VARCHAR(50) DEFAULT 'pending', -- pending, paid, failed
  order_status VARCHAR(50) DEFAULT 'pending', -- pending, ready, completed, cancelled
  items JSONB NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
```

#### Payments Table
```sql
CREATE TABLE payments (
  id BIGSERIAL PRIMARY KEY,
  order_id BIGINT REFERENCES orders(id),
  midtrans_transaction_id VARCHAR(100) UNIQUE,
  amount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- pending, settlement, failed
  payment_method VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
```

### Step 2.3: Setup Row Level Security (RLS)
Ini untuk keamanan - users hanya bisa lihat data mereka sendiri.

```sql
-- Users RLS
CREATE POLICY "Users can view own data" ON users
FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
FOR UPDATE USING (auth.uid() = id);

-- Products RLS (public read)
CREATE POLICY "Products visible to all" ON products
FOR SELECT USING (true);

-- Orders RLS
CREATE POLICY "Users can view own orders" ON orders
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own orders" ON orders
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Payments RLS
CREATE POLICY "Users can view own payments" ON payments
FOR SELECT USING (
  EXISTS (SELECT 1 FROM orders WHERE orders.id = payments.order_id AND orders.user_id = auth.uid())
);
```

### Step 2.4: Setup Supabase Client di Project

Buat file `src/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side client (dengan service role key)
export const supabaseServer = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
```

---

## Phase 3: Frontend Customer

### Step 3.1: Authentication Setup

Buat file `src/lib/auth.ts`:
```typescript
import { supabase } from './supabase';

export const signUp = async (email: string, password: string, name: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name }
    }
  });
  return { data, error };
};

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  return { data, error };
};
```

### Step 3.2: Create Store (Zustand) untuk Cart

Buat file `src/lib/store.ts`:
```typescript
import { create } from 'zustand';

interface CartItem {
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (product_id: number) => void;
  updateQuantity: (product_id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => set((state) => {
    const existing = state.items.find(i => i.product_id === item.product_id);
    if (existing) {
      return {
        items: state.items.map(i =>
          i.product_id === item.product_id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      };
    }
    return { items: [...state.items, item] };
  }),
  removeItem: (product_id) => set((state) => ({
    items: state.items.filter(i => i.product_id !== product_id)
  })),
  updateQuantity: (product_id, quantity) => set((state) => ({
    items: state.items.map(i =>
      i.product_id === product_id ? { ...i, quantity } : i
    ).filter(i => i.quantity > 0)
  })),
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));
```

### Step 3.3: Halaman Produk (Home/Products)

Buat file `src/app/products/page.tsx`:
```typescript
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useCartStore } from '@/lib/store';
import toast from 'react-hot-toast';

interface Product {
  id: number;
  name: string;
  price: number;
  image_url: string;
  stock: number;
  description: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*');
    
    if (error) {
      toast.error('Gagal load produk');
      console.error(error);
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  };

  const handleAddToCart = (product: Product) => {
    if (product.stock <= 0) {
      toast.error('Produk habis');
      return;
    }
    addItem({
      product_id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image_url: product.image_url
    });
    toast.success('Ditambah ke keranjang');
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Produk</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow p-4">
            {product.image_url && (
              <img src={product.image_url} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
            )}
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">Rp {product.price.toLocaleString('id-ID')}</p>
            <p className="text-sm text-gray-500 mb-4">Stock: {product.stock}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={product.stock <= 0}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
            >
              {product.stock > 0 ? 'Tambah ke Keranjang' : 'Habis'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Step 3.4: Halaman Cart

Buat file `src/app/cart/page.tsx`:
```typescript
'use client';
import { useCartStore } from '@/lib/store';
import Link from 'next/link';

export default function CartPage() {
  const items = useCartStore(state => state.items);
  const removeItem = useCartStore(state => state.removeItem);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const getTotalPrice = useCartStore(state => state.getTotalPrice);

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl mb-4">Keranjang kosong</p>
        <Link href="/products" className="text-blue-600 hover:underline">
          Lihat Produk
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Keranjang Belanja</h1>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        {items.map(item => (
          <div key={item.product_id} className="flex justify-between items-center py-4 border-b">
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">Rp {item.price.toLocaleString('id-ID')}</p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.product_id, parseInt(e.target.value))}
                className="w-16 border rounded px-2 py-1"
              />
              <button
                onClick={() => removeItem(item.product_id)}
                className="text-red-600 hover:text-red-800"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <p className="text-2xl font-bold mb-6">
          Total: Rp {getTotalPrice().toLocaleString('id-ID')}
        </p>
        <Link
          href="/checkout"
          className="w-full bg-green-600 text-white py-3 rounded text-center hover:bg-green-700 block"
        >
          Lanjut ke Checkout
        </Link>
      </div>
    </div>
  );
}
```

---

## Phase 4: Payment Integration

### Step 4.1: Midtrans Setup

Buat file `src/lib/payment.ts`:
```typescript
import axios from 'axios';

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY!;
const MIDTRANS_CLIENT_KEY = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY!;

const base64Credentials = Buffer.from(`${MIDTRANS_SERVER_KEY}:`).toString('base64');

export const createMidtransTransaction = async (
  orderId: string,
  amount: number,
  customerEmail: string,
  customerName: string,
  itemDetails: any[]
) => {
  try {
    const response = await axios.post(
      'https://app.midtrans.com/snap/v1/transactions',
      {
        transaction_details: {
          order_id: orderId,
          gross_amount: amount
        },
        customer_details: {
          email: customerEmail,
          first_name: customerName
        },
        item_details: itemDetails
      },
      {
        headers: {
          'Authorization': `Basic ${base64Credentials}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error('Midtrans error:', error);
    throw error;
  }
};

export const getMidtransClientKey = () => MIDTRANS_CLIENT_KEY;
```

### Step 4.2: Checkout Page

Buat file `src/app/checkout/page.tsx`:
```typescript
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/lib/store';
import { supabase } from '@/lib/supabase';
import { createMidtransTransaction } from '@/lib/payment';
import toast from 'react-hot-toast';

declare global {
  interface Window {
    snap?: any;
  }
}

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore(state => state.items);
  const getTotalPrice = useCartStore(state => state.getTotalPrice);
  const clearCart = useCartStore(state => state.clearCart);

  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'online' | 'cod'>('online');
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Get current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (!user) {
        toast.error('Silakan login terlebih dahulu');
        router.push('/auth/login');
        return;
      }

      // 2. Create order
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([{
          user_id: user.id,
          total_price: getTotalPrice(),
          payment_method: paymentMethod,
          payment_status: paymentMethod === 'cod' ? 'pending' : 'pending',
          order_status: 'pending',
          items: items,
          notes: customerData.notes
        }])
        .select()
        .single();

      if (orderError) throw orderError;

      if (paymentMethod === 'online') {
        // 3. Create Midtrans transaction
        const itemDetails = items.map(item => ({
          id: item.product_id,
          price: item.price,
          quantity: item.quantity,
          name: item.name
        }));

        const midtransData = await createMidtransTransaction(
          `ORDER-${order.id}`,
          getTotalPrice(),
          user.email || customerData.email,
          customerData.name,
          itemDetails
        );

        // 4. Save payment record
        await supabase
          .from('payments')
          .insert([{
            order_id: order.id,
            midtrans_transaction_id: midtransData.token,
            amount: getTotalPrice(),
            status: 'pending'
          }]);

        // 5. Redirect ke Midtrans payment
        window.snap?.pay(midtransData.token, {
          onSuccess: () => {
            clearCart();
            toast.success('Pembayaran berhasil!');
            router.push(`/order-history/${order.id}`);
          },
          onError: () => {
            toast.error('Pembayaran gagal');
          }
        });
      } else {
        // COD
        clearCart();
        toast.success('Pesanan dibuat! Silakan ambil di tempat kami.');
        router.push(`/order-history/${order.id}`);
      }
    } catch (error) {
      console.error(error);
      toast.error('Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleCheckout} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Data Diri</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                value={customerData.name}
                onChange={(e) => setCustomerData({...customerData, name: e.target.value})}
                required
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={customerData.email}
                onChange={(e) => setCustomerData({...customerData, email: e.target.value})}
                required
                className="w-full border rounded px-4 py-2"
              />
              <input
                type="tel"
                placeholder="No. HP"
                value={customerData.phone}
                onChange={(e) => setCustomerData({...customerData, phone: e.target.value})}
                required
                className="w-full border rounded px-4 py-2"
              />
              <textarea
                placeholder="Alamat"
                value={customerData.address}
                onChange={(e) => setCustomerData({...customerData, address: e.target.value})}
                required
                className="w-full border rounded px-4 py-2"
              />
              <textarea
                placeholder="Catatan (opsional)"
                value={customerData.notes}
                onChange={(e) => setCustomerData({...customerData, notes: e.target.value})}
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Metode Pembayaran</h2>
            <div className="space-y-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="online"
                  checked={paymentMethod === 'online'}
                  onChange={(e) => setPaymentMethod(e.target.value as 'online')}
                  className="mr-3"
                />
                <span>Bayar Online (Kartu/Transfer)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={(e) => setPaymentMethod(e.target.value as 'cod')}
                  className="mr-3"
                />
                <span>Bayar Nanti (Saat Ambil)</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-8 bg-green-600 text-white py-3 rounded hover:bg-green-700 disabled:bg-gray-400"
            >
              {loading ? 'Processing...' : 'Selesaikan Pembelian'}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Ringkasan Pesanan</h2>
          <div className="space-y-3 mb-4 border-b pb-4">
            {items.map(item => (
              <div key={item.product_id} className="flex justify-between text-sm">
                <span>{item.name} x{item.quantity}</span>
                <span>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</span>
              </div>
            ))}
          </div>
          <div className="text-xl font-bold">
            Total: Rp {getTotalPrice().toLocaleString('id-ID')}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Phase 5: Admin Panel

### Step 5.1: Admin Dashboard

Buat file `src/app/admin/page.tsx`:
```typescript
'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import toast from 'react-hot-toast';

interface Order {
  id: number;
  user_id: string;
  total_price: number;
  payment_status: string;
  order_status: string;
  created_at: string;
  items: any[];
}

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error('Gagal load orders');
    } else {
      setOrders(data || []);
    }
    setLoading(false);
  };

  const updateOrderStatus = async (orderId: number, status: string) => {
    const { error } = await supabase
      .from('orders')
      .update({ order_status: status, updated_at: new Date() })
      .eq('id', orderId);

    if (error) {
      toast.error('Gagal update status');
    } else {
      toast.success('Status updated');
      fetchOrders();
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left">Order ID</th>
              <th className="px-6 py-3 text-left">Total</th>
              <th className="px-6 py-3 text-left">Payment</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-t">
                <td className="px-6 py-3">{order.id}</td>
                <td className="px-6 py-3">Rp {order.total_price.toLocaleString('id-ID')}</td>
                <td className="px-6 py-3">{order.payment_status}</td>
                <td className="px-6 py-3">
                  <select
                    value={order.order_status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                    className="border rounded px-2 py-1"
                  >
                    <option value="pending">Pending</option>
                    <option value="ready">Ready Pickup</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="px-6 py-3">
                  <button
                    onClick={() => console.log('View details', order.id)}
                    className="text-blue-600 hover:underline"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
```

---

## Phase 6: Testing & Deployment

### Step 6.1: Test Locally
```bash
npm run dev
# Buka http://localhost:3000
```

**Test Checklist:**
- [ ] Signup/Login working
- [ ] View produk normal
- [ ] Add to cart working
- [ ] Checkout form submit
- [ ] Midtrans payment popup muncul
- [ ] Admin dashboard load orders
- [ ] Update order status working

### Step 6.2: Midtrans Payment Testing

Gunakan credentials test dari Midtrans:
- Card: `4811 1111 1111 1114`
- Exp: `12/25`
- CVV: `123`

### Step 6.3: Deploy ke Vercel

```bash
# 1. Push ke GitHub
git add .
git commit -m "E-commerce website"
git push

# 2. Login ke Vercel
vercel login

# 3. Deploy
vercel

# 4. Setup environment variables di Vercel dashboard
# Add: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, etc.
```

### Step 6.4: Production Checklist
- [ ] Environment variables di Vercel sudah benar
- [ ] Supabase RLS policies active
- [ ] Payment gateway pake production key (bukan test)
- [ ] Database backup enabled di Supabase
- [ ] SSL certificate (Vercel auto setup)
- [ ] Error monitoring setup (optional: Sentry)

---

## Tips & Tricks

1. **Tambah gambar produk**: Upload ke Supabase Storage
2. **Stripe alternative**: Bisa pakai Xendit atau PayPal
3. **Email notification**: Gunakan SendGrid API
4. **Analytics**: Setup Google Analytics
5. **SEO**: Setup Next.js metadata
6. **Mobile optimize**: Test di iPhone/Android real device

---

## Troubleshooting

**Problem: Supabase RLS blocking query**
- Solution: Check RLS policies, pastikan query sesuai

**Problem: Midtrans payment tidak popup**
- Solution: Pastikan `NEXT_PUBLIC_MIDTRANS_CLIENT_KEY` benar

**Problem: Cart data hilang setelah refresh**
- Solution: Simpan cart ke localStorage, implementasi persist di Zustand

---

## Next Steps Setelah MVP
- Email verification
- Order tracking real-time
- Product reviews
- Promo/discount system
- Inventory management
- Multi-admin support

---

Sukses membuat e-commerce! 🚀
