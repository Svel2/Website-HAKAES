HAKAES Website - Logistics & Cargo Services
Ini adalah proyek website perusahaan logistik dan kargo, PT HAKAES Tunas Sinergi, yang dibangun menggunakan Next.js App Router dan didesain dengan antarmuka modern yang responsif.

🚀 Fitur Utama
Layanan Komprehensif: Halaman detail untuk 6+ layanan utama (Same Day, Innercity, Cargo Delivery, Logistic & Distribution, dll.).

Desain Responsif: Tampilan optimal di berbagai perangkat, dari desktop hingga mobile.

Animasi Halus (Smooth Animations): Menggunakan Framer Motion untuk transisi dan efek scroll yang mulus.

Formulir Kontak (Contact Form): Dilengkapi client-side dan server-side validation dengan integrasi API untuk pengiriman data formulir (saat ini diarahkan ke Google Apps Script).

SEO Ready: Memiliki konfigurasi dasar seperti sitemap.xml dan robots.txt.

🛠️ Teknologi yang Digunakan
Framework: Next.js (Version 15.x)

Bahasa: TypeScript

Styling: Tailwind CSS

Animasi: Framer Motion dan AOS

Linting: ESLint (next/core-web-vitals)

Font: Geist, Geist Mono, Inter

📋 Prasyarat Instalasi
Pastikan Anda memiliki Node.js (versi 18.x atau yang lebih baru direkomendasikan) terinstal di sistem Anda.

Clone repositori ini:

Bash

git clone [URL_REPO_ANDA]
cd website-hakaes
Instal dependencies:

Bash

npm install
# atau
yarn install
Setup Environment Variables (Opsional, untuk form):

Buat file .env.local di root project untuk menyimpan keys sensitif.

# Contoh Environment Variables yang mungkin diperlukan (tergantung implementasi backend)
# NEXT_PUBLIC_RECAPTCHA_SITE_KEY=xxx
# RECAPTCHA_SECRET_KEY=xxx
# SMTP_HOST=smtp.example.com
# ...
📁 Susunan Project
Struktur folder utama mengikuti konvensi Next.js App Router:

website-hakaes/
├── public/                # Assets statis (gambar, logo, favicon, robots.txt, sitemap.xml)
│   ├── image/
│   ├── logo/
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/               # Root App Router
│   │   ├── api/           # Route Handlers (misalnya contact form)
│   │   ├── services/      # Dynamic routes untuk setiap halaman layanan
│   │   └── (routes utama: layout.tsx, page.tsx, not-found.tsx)
│   ├── components/        # Komponen UI yang dapat digunakan kembali (Navbar, Footer, ContactUs, dll.)
│   └── globals.css        # File styling global (Tailwind imports)
├── .gitignore
├── next.config.ts
├── package.json
└── tsconfig.json
▶️ Contoh Penggunaan
Untuk menjalankan server pengembangan secara lokal:

Bash

npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
Buka http://localhost:3000 di browser Anda untuk melihat hasilnya.

Untuk membuat production build:

Bash

npm run build
🤝 Kontribusi
Kontribusi dipersilakan! Silakan buka issue atau kirim pull request dengan perbaikan bug atau penambahan fitur.
