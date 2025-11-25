# SEO Setup Guide for Zoe Holidays Instagram Gallery

## 🎯 SEO Features Implemented

This application now includes comprehensive SEO optimizations:

### ✅ Meta Tags & Metadata
- **Title Tags**: Dynamic titles with templates
- **Meta Descriptions**: Compelling, keyword-rich descriptions
- **Keywords**: Targeted travel and photography keywords
- **Open Graph Tags**: Perfect social media sharing previews
- **Twitter Cards**: Optimized Twitter sharing
- **Canonical URLs**: Prevent duplicate content issues

### ✅ Technical SEO
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Search engine crawler instructions
- **Manifest**: PWA support for mobile
- **Structured Data**: JSON-LD schema for rich snippets
- **Security Headers**: HSTS, CSP, and more
- **Performance**: Image optimization, compression

### ✅ Accessibility & UX
- **Semantic HTML**: Proper heading hierarchy
- **Screen Reader Support**: ARIA labels and sr-only content
- **Loading States**: Skeleton screens for better UX
- **Alt Text**: Descriptive image alternatives

## 🚀 Setup Instructions

### 1. Environment Variables

Update your `.env` file with:

```env
# Required
NEXT_PUBLIC_INSTAGRAM_ID=your_instagram_id
NEXT_PUBLIC_INSTAGRAM_TOKEN=your_access_token
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional but recommended
NEXT_PUBLIC_TWITTER_HANDLE=@zoeholidays
```

### 2. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Get your verification code
4. Update `app/layout.tsx` line 77 with your verification code:
   ```typescript
   verification: {
     google: "your-actual-verification-code",
   }
   ```

### 3. Social Media Images

Replace these placeholder images in the `/public` folder:

- **og-image.jpg** (1200x630px): Main social sharing image
- **icon-192.png** (192x192px): PWA icon
- **icon-512.png** (512x512px): PWA icon
- **logo.png**: Your brand logo

### 4. Customize Content

Update the following in `app/layout.tsx`:

```typescript
title: "Your Brand - Instagram Gallery | Your Tagline"
description: "Your custom description..."
keywords: ["your", "custom", "keywords"]
```

### 5. Submit Sitemap

After deployment, submit your sitemap to search engines:

- **Google**: https://search.google.com/search-console
- **Bing**: https://www.bing.com/webmasters
- **Yandex**: https://webmaster.yandex.com

Your sitemap URL: `https://yourdomain.com/sitemap.xml`

## 📊 SEO Checklist

- [ ] Update environment variables
- [ ] Add Google Search Console verification
- [ ] Replace placeholder images (og-image, icons)
- [ ] Customize meta titles and descriptions
- [ ] Update keywords for your niche
- [ ] Submit sitemap to search engines
- [ ] Set up Google Analytics (optional)
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Validate structured data with [Schema Validator](https://validator.schema.org/)
- [ ] Test social sharing with [OpenGraph Debugger](https://www.opengraph.xyz/)

## 🔍 Testing Your SEO

### Local Testing
```bash
npm run build
npm start
```

Visit these URLs to verify:
- `/sitemap.xml` - Should show your sitemap
- `/robots.txt` - Should show crawler instructions
- `/manifest.webmanifest` - Should show PWA manifest

### Online Tools
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Rich Results Test**: https://search.google.com/test/rich-results
- **OpenGraph Preview**: https://www.opengraph.xyz/

## 📈 Expected Results

With these optimizations, you should see:

1. **Better Rankings**: Improved search engine visibility
2. **Higher CTR**: Compelling meta descriptions increase clicks
3. **Social Engagement**: Beautiful social media previews
4. **Mobile Performance**: PWA features and fast loading
5. **Rich Snippets**: Enhanced search results with structured data

## 🛠️ Maintenance

- Update meta descriptions seasonally
- Refresh keywords based on analytics
- Keep sitemap current (auto-generated)
- Monitor Core Web Vitals
- Update social images for campaigns

## 📚 Resources

- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)

---

**Need help?** Check the Next.js documentation or open an issue.
