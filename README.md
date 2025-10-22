# HAKAES Website - Logistics & Cargo Services

Ini adalah proyek *website* perusahaan logistik dan kargo, **PT HAKAES Tunas Sinergi**, yang dibangun menggunakan **Next.js App Router** dan didesain dengan antarmuka modern yang responsif.

---

## 🚀 Fitur Utama

* **Layanan Komprehensif:** Halaman detail untuk 6+ layanan utama (Same Day, Innercity, Cargo Delivery, Logistic & Distribution, dll.).
* **Desain Responsif:** Tampilan optimal di berbagai perangkat, dari *desktop* hingga *mobile*.
* **Animasi Halus (Smooth Animations):** Menggunakan **Framer Motion** untuk transisi dan efek *scroll* yang mulus.
* **Formulir Kontak (Contact Form):** Dilengkapi *client-side* dan *server-side validation* dengan integrasi API untuk pengiriman data formulir (saat ini diarahkan ke Google Apps Script).
* **SEO Ready:** Memiliki konfigurasi dasar seperti `sitemap.xml` dan `robots.txt`.

---

## 🛠️ Teknologi yang Digunakan

* **Framework:** [Next.js](https://nextjs.org/) (Version 15.x)
* **Bahasa:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animasi:** [Framer Motion](https://www.framer.com/motion/) dan [AOS](https://michalsnik.github.io/aos/)
* **Linting:** ESLint (`next/core-web-vitals`)
* **Font:** Geist, Geist Mono, Inter

---

## 📋 Prasyarat Instalasi

Pastikan Anda memiliki [Node.js](https://nodejs.org/en) (versi 18.x atau yang lebih baru direkomendasikan) terinstal di sistem Anda.

1.  **Clone repositori ini:**

    ```bash
    git clone [URL_REPO_ANDA]
    cd website-hakaes
    ```

2.  **Instal *dependencies*:**

    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Setup Environment Variables (Opsional, untuk form):**

    Buat file `.env.local` di root project untuk menyimpan *keys* sensitif (tidak di-commit ke Git).

    ```
    # Contoh Environment Variables yang mungkin diperlukan (tergantung implementasi backend)
    # NEXT_PUBLIC_RECAPTCHA_SITE_KEY=xxx
    # RECAPTCHA_SECRET_KEY=xxx
    # SMTP_HOST=smtp.example.com
    # ...
    ```

---

## 📁 Susunan Project

Struktur folder utama mengikuti konvensi **Next.js App Router**:
``` 

```

## ▶️ Contoh Penggunaan

Untuk menjalankan *server* pengembangan secara lokal:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

Untuk membuat *production build*:

```bash
npm run build
```

---

## 🤝 Kontribusi

Kontribusi dipersilakan! Silakan buka *issue* atau kirim *pull request* dengan perbaikan bug atau penambahan fitur.

## 📄 Lisensi

Proyek ini dilisensikan di bawah **Lisensi MIT**.

```
MIT License

Copyright (c) 2025 PT HAKAES Tunas Sinergi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
```
