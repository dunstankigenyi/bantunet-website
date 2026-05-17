# BantuNet Website

Professional public website for BantuNet, built with Next.js, React, TypeScript, and Tailwind CSS.

## Edit Website Copy

All public website copy is managed in one file:

`content/siteContent.ts`

Edit that file to update navigation labels, page headings, paragraphs, buttons, FAQ entries, support text, privacy policy text, delete account copy, and footer text.

## Pages

- `/`
- `/about`
- `/how-it-works`
- `/hosts`
- `/support`
- `/privacy`
- `/delete-account`

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Vercel Deployment

This project is ready for Vercel. Import the repository into Vercel, keep the default Next.js build settings, and assign the production domain:

`www.bantunet.org`

The canonical site URL is configured in `content/siteContent.ts`.

## SEO

The site includes page metadata, Open Graph tags, favicon support, `sitemap.xml`, `robots.txt`, and a web app manifest.
