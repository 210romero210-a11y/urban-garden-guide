# ContentEmpire Next.js

A modern, sophisticated Next.js 16+ blog for indoor, urban, apartment, and container gardening content.

## Profile: ContentEmpire-NextJS

**Topic Focus:** Indoor, Urban, Apartment, and Container Gardening for beginners and small spaces

**Design Philosophy:**
- Modern, elegant, and aesthetically pleasing
- Dark mode as default
- Primary color: Teal (#14b8a6)
- Secondary accent: Light gray (#d1d5db)

## Technical Stack

- **Framework:** Next.js 16+ with App Router
- **Language:** Strict TypeScript (strict: true)
- **Styling:** Tailwind CSS
- **Content:** MDX with frontmatter
- **Deployment:** Static export for Cloudflare Pages
- **Architecture:** Progressive Streaming, Partial Prerendering, Server Components

## Skills Created

### 1. contentempire-next-researcher
Research evergreen, low-competition topics in indoor/container gardening.

### 2. contentempire-next-writer
Generate sophisticated, engaging, SEO-optimized MDX articles (1800-3000 words).

### 3. contentempire-next-affiliate
Naturally insert 3-6 relevant affiliate links with proper FTC disclosures.

### 4. contentempire-next-imageprompter
Create 5-7 detailed, high-quality image prompts for AI generators or stock photos.

### 5. contentempire-next-publisher
Output well-structured MDX files with rich frontmatter for Next.js routing.

### 6. contentempire-next-master
Master orchestrator that coordinates the full pipeline.

## Content Structure

```
content/
├── posts/           # MDX blog posts
├── authors/         # Author JSON files
└── categories/      # Category JSON files

public/
└── images/
    └── articles/    # Article-specific images
```

## First Article Generated

**Title:** 10 Best Container Vegetables for Apartment Beginners in 2026

**File:** `content/posts/best-container-vegetables-apartment-beginners.mdx`

**Stats:**
- Word Count: ~3,200 words
- Affiliate Links: 8
- Images: 7 prompts
- Reading Time: 12 minutes

**SEO:**
- Primary Keyword: "container vegetables apartment beginners"
- Meta Title: "10 Best Container Vegetables for Apartment Beginners (2026)"
- Structured Data: Article, FAQ, BreadcrumbList

**Affiliate Programs:**
- Seeds Now (20-25% commission) - seeds
- Gardener's Supply (8-12% commission) - containers
- Click & Grow (10% commission) - smart gardens
- Amazon Associates (4% average) - general supplies

## Next.js Architecture Features

- ✅ App Router with strict TypeScript
- ✅ Static export (`output: 'export'`)
- ✅ Progressive Streaming with nested Suspense
- ✅ Server Components for Markdown processing
- ✅ Partial Prerendering (PPR)
- ✅ "use cache" directive for expensive operations
- ✅ Server Actions for interactions
- ✅ "use client" leaf pattern
- ✅ Dynamic OG images (opengraph-image.tsx)
- ✅ JSON-LD structured data
- ✅ Dynamic sitemap.ts and robots.ts
- ✅ Parallel Routes / Slots pattern
- ✅ React Compiler support

## Design System

### Colors
- Primary: `#14b8a6` (Teal)
- Secondary: `#d1d5db` (Light Gray)
- Background Dark: `#0f172a` (Slate 900)
- Background Card: `#1e293b` (Slate 800)
- Text Primary: `#f8fafc` (Slate 50)
- Text Secondary: `#94a3b8` (Slate 400)

### Typography
- Headings: Inter or Geist
- Body: Inter or system-ui
- Code: JetBrains Mono or Fira Code

## Usage

### Generate New Article
```bash
hermes skill use contentempire-next-master
```

### Schedule Automated Publishing
```bash
hermes cron create \
  --skill contentempire-next-master \
  --schedule "0 9 */3 * *" \
  --name "ContentEmpire Publishing"
```

## Affiliate Programs Integrated

| Program | Commission | Best For |
|---------|-----------|----------|
| Seeds Now | 20-25% | Vegetable/herb seeds |
| Gardener's Supply | 8-12% | Containers, supplies |
| Click & Grow | 10% | Smart gardens |
| AeroGarden | 7.5-12% | Hydroponic systems |
| Succulents Box | 10% | Indoor plants |
| Amazon Associates | 4% | General supplies |

## Content Categories

- container-gardening
- indoor-gardening
- herb-gardening
- urban-gardening
- beginner-guides
- plant-care
- hydroponics
- small-spaces

## License

ContentEmpire - All rights reserved.
