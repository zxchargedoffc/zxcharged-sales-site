# ZXCHARGED Sales Site

Production-ready React/Vite лендинг для продажи ключей ZXCHARGED CLIENT.

## Стек

- React
- TypeScript
- Vite
- Чистый CSS без UI-kit зависимостей

## Структура

```text
zxcharged-sales-site/
  public/
    favicon.svg
    robots.txt
    site.webmanifest
    social-preview.svg
  src/
    components/
      BenefitsSection.tsx
      FaqSection.tsx
      Footer.tsx
      Header.tsx
      HeroSection.tsx
      PricingSection.tsx
    lib/
      purchase.ts
    App.tsx
    content.ts
    main.tsx
    styles.css
    vite-env.d.ts
  .env.example
  .gitignore
  index.html
  netlify.toml
  package.json
  tsconfig.json
  tsconfig.node.json
  vercel.json
  vite.config.ts
```

## Запуск локально

Нужен Node.js 20+.

```bash
npm install
npm run dev
```

Открыть локально:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
npm run preview
```

Собранный сайт появится в папке:

```text
dist/
```

## Настройка кнопок покупки

Скопируйте `.env.example` в `.env`.

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Поменяйте ссылку:

```text
VITE_PURCHASE_URL=https://t.me/zxcharged_support
```

Поддерживаются два сценария:

- Telegram-ссылка: кнопка автоматически добавит текст с выбранным тарифом.
- Любая другая ссылка: кнопка поведёт напрямую на checkout/page URL.

Если нужен шаблон с тарифом в URL, используйте `{plan}`:

```text
VITE_PURCHASE_URL=https://pay.example.com/checkout?plan={plan}
```

## Деплой на Vercel

1. Загрузите папку `zxcharged-sales-site` в GitHub.
2. Откройте `https://vercel.com`.
3. `New Project` -> `Import Repository`.
4. Framework Preset: `Vite`.
5. Build Command: `npm run build`.
6. Output Directory: `dist`.
7. Добавьте переменную окружения `VITE_PURCHASE_URL`, если нужна другая ссылка покупки.
8. Нажмите `Deploy`.

После деплоя Vercel выдаст HTTPS URL вида:

```text
https://your-project.vercel.app
```

## Деплой на Netlify

1. Загрузите папку `zxcharged-sales-site` в GitHub.
2. Откройте `https://app.netlify.com`.
3. `Add new site` -> `Import an existing project`.
4. Build command: `npm run build`.
5. Publish directory: `dist`.
6. Добавьте `VITE_PURCHASE_URL` в Environment variables.
7. Нажмите `Deploy`.

После деплоя Netlify выдаст HTTPS URL вида:

```text
https://your-project.netlify.app
```

## Что внутри

- Hero-блок с презентацией продукта.
- Блок преимуществ.
- Pricing на 30, 60, 90 дней и lifetime.
- FAQ.
- Footer.
- SEO title, meta description, Open Graph, manifest, robots.
- Адаптив под мобильные устройства.
- Лёгкие hover/fade эффекты без тяжёлых canvas/shader/animation библиотек.
