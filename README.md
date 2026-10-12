# سینا گروه بهسان | SGB Modern Redesign

سایت مدرن دو زبانه (فارسی / انگلیسی) شرکت مهندسین سینا گروه بهسان.

- **GitHub Pages:** https://mhakimii.github.io/sgb-co-modern-redesign/
- **Repo:** https://github.com/mhakimii/sgb-co-modern-redesign

## استقرار روی Cloudflare

### روش پیشنهادی: Cloudflare Pages (ساده)

1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. ریپو: `mhakimii/sgb-co-modern-redesign`
3. تنظیمات:
   - Framework preset: **None**
   - Build command: **خالی**
   - Build output directory: **/** یا `.`
   - Deploy command: **خالی** بگذار (از `npx wrangler deploy` استفاده نکن)
4. Save and Deploy

### اگر از Workers + Assets / Wrangler استفاده می‌کنی

فایل `wrangler.jsonc` از قبل در ریپو هست. Deploy command:

```
npx wrangler deploy
```

**نکته:** فایل `_redirects` حذف شده چون باعث خطای Infinite loop می‌شد.

## ساختار

```
index.html      صفحه اصلی
styles.css      استایل
script.js       منو و فرم
i18n.js         ترجمه FA/EN
wrangler.jsonc  تنظیمات Cloudflare
_headers        هدرهای امنیتی و کش
assets/         تصاویر
```

طراحی و توسعه: [تیم بیت وان](https://bit-one.ir)
