# سینا گروه بهسان | SGB Modern Redesign

سایت مدرن دو زبانه (فارسی / انگلیسی) شرکت مهندسین سینا گروه بهسان.

- **GitHub Pages:** https://mhakimii.github.io/sgb-co-modern-redesign/
- **Repo:** https://github.com/mhakimii/sgb-co-modern-redesign

## استقرار یک‌کلیکی روی Cloudflare Pages

1. وارد [Cloudflare Dashboard](https://dash.cloudflare.com) شو → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. GitHub را وصل کن و ریپوی `mhakimii/sgb-co-modern-redesign` را انتخاب کن
3. تنظیمات:
   - **Framework preset:** None
   - **Build command:** *(خالی بگذار)*
   - **Build output directory:** `/`  یا خالی
   - **Root directory:** `/`
4. **Save and Deploy**

بعد از دیپلوی می‌توانی دامنه سفارشی (مثلاً `sgb-co.com`) را در بخش Custom domains اضافه کنی.

فایل‌های `_headers` و `_redirects` برای کش و امنیت از قبل آماده هستند.

## ساختار

```
index.html   — صفحه اصلی
styles.css   — استایل
script.js    — منو، اسکرول، فرم
i18n.js      — ترجمه فارسی/انگلیسی
assets/      — تصاویر و لوگو
```

طراحی و توسعه: [تیم بیت وان](https://bit-one.ir)
