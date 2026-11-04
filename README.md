# Kök Ceviz

React, Tailwind CSS ve Vite ile hazırlanmış, mobil uyumlu örnek kurumsal cevizcilik sitesi.

## Yerel geliştirme

Node.js 22 veya üzeri önerilir.

```sh
npm ci
npm run dev
```

## Üretim derlemesi

```sh
npm run build
npm run preview
```

## Vercel yayını

Projeyi GitHub deposuna yükleyin. Vercel'de **Add New → Project** üzerinden depoyu içe aktarın. Framework: **Vite**, build: `npm run build`, output: `dist`. Ortam değişkeni gerekmez. Sonraki GitHub gönderimleri otomatik olarak yeni dağıtım başlatır.

## Firma bilgileri

`src/main.jsx` içindeki Kök Ceviz örnek marka adı, ürün metinleri ve iletişim alanı gerçek firma bilgileriyle değiştirilmelidir. İletişim formu demo amaçlıdır; veri kaydetmez veya mesaj göndermez. Fotoğraflar Unsplash, yazı tipleri Google Fonts üzerinden yüklenir.
