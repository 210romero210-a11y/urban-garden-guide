# ContentEmpire System

## Overview
ContentEmpire is an automated content generation system focused exclusively on **Indoor/Urban/Apartment/Container Gardening** for beginners and small spaces.

## Core Principles
- **100% Gardening Content** - No AI, tech, Ubuntu, Ollama, or computing topics
- **Beginner-Focused** - Accessible, practical advice for apartment dwellers
- **Ethical Affiliates** - Honest product recommendations with proper disclosures
- **SEO-Optimized** - Long-tail keywords, proper structure, readability focus
- **Self-Improving** - Learning loop for continuous quality improvement

## Sub-Agents (Skills)

### 1. contentempire-researcher
Identifies evergreen, low-competition topics in container gardening
- Long-tail keyword research
- Competition analysis
- Content outline generation

### 2. contentempire-seowriter
Writes 1800-3000 word SEO articles
- H1-H3 heading structure
- Tables, lists, tips
- FAQ sections
- Meta descriptions

### 3. contentempire-affiliate
Inserts 3-6 high-commission affiliate links naturally
- FTC-compliant disclosures
- Mix of price points
- Contextual placement
- **Priority Programs** (see below)

### 4. contentempire-publisher
Formats as Jekyll/Hugo Markdown
- Front-matter with SEO meta
- Proper file naming
- Git publishing workflow

### 5. contentempire-optimizer
Extracts lessons for continuous improvement
- Performance analysis
- Content quality audits
- Strategy refinement

## Affiliate Programs (Priority Order)

### 1. Seeds Now (20-25% commission) - HIGHEST PRIORITY
**Best for**: All seed-related content, vegetable growing guides
**Products**: Heirloom vegetable seeds, organic seeds, herb seeds, microgreen seeds
**Link**: https://www.seedsnow.com/?ref=CONTENTEMPIRE
**When to use**: Any article mentioning seeds, planting, or starting from seed

### 2. Click & Grow (10% commission)
**Best for**: Indoor gardening, smart gardens, apartment herb growing
**Products**: Smart Garden 3/9/25, plant pods, indoor growing systems
**Link**: https://www.clickandgrow.com/?ref=CONTENTEMPIRE
**When to use**: Indoor herb articles, beginner hydroponics, countertop gardens

### 3. Succulents Box (10% commission)
**Best for**: Low-light plants, houseplants, decorative indoor gardens
**Products**: Succulent subscriptions, individual plants, care supplies
**Link**: https://succulentsbox.com/?ref=CONTENTEMPIRE
**When to use**: Low-light plant articles, houseplant guides, decor-focused content

### 4. Gardener's Supply Company (8-12% commission)
**Best for**: Gardening supplies, containers, tools, self-watering systems
**Products**: Self-watering planters, grow lights, tools, raised beds
**Link**: https://www.gardeners.com/?ref=CONTENTEMPIRE
**When to use**: Container guides, tool recommendations, supply articles

### 5. AeroGarden (7.5-12% commission)
**Best for**: Indoor herb gardens, hydroponic beginners
**Products**: Harvest, Bounty, Farm models, seed pods
**Link**: https://www.aerogarden.com/?ref=CONTENTEMPIRE
**When to use**: Alternative to Click & Grow, well-known brand preference

### 6. Gardyn (High ticket)
**Best for**: Premium vertical gardening, serious indoor growers
**Products**: Gardyn Home Kit, vertical growing systems
**Link**: https://www.gardyn.com/?ref=CONTENTEMPIRE
**When to use**: Premium/serious gardener content, vertical growing articles

### 7. Amazon Associates (Volume baseline)
**Best for**: Budget alternatives, general products, books, fast shipping
**When to use**: Budget options, products other programs don't carry, price comparisons

## Article-Type Affiliate Strategy

### Seed/Vegetable Articles
- **Primary**: Seeds Now (highest commission 20-25%)
- **Secondary**: Gardener's Supply (self-watering containers)
- **Tertiary**: Amazon (soil, basic containers)

### Indoor/Herb Articles
- **Primary**: Click & Grow OR AeroGarden
- **Secondary**: Seeds Now (herb seeds)
- **Tertiary**: Amazon (grow lights, pots)

### Container/Supply Articles
- **Primary**: Gardener's Supply
- **Secondary**: Amazon (budget alternatives)
- **Tertiary**: Click & Grow (smart containers)

### Low-Light/Houseplant Articles
- **Primary**: Succulents Box
- **Secondary**: Amazon (grow lights)
- **Tertiary**: Click & Grow (for herbs)

### Vertical/Premium Articles
- **Primary**: Gardyn
- **Secondary**: Gardener's Supply
- **Tertiary**: Click & Grow

## Directory Structure
```
~/contentempire/
├── posts/          # Published articles
├── images/         # Featured images
├── lessons/        # Optimization logs
└── README.md       # System documentation
```

## Automated Publishing

### Cron Job
- **Schedule**: Every 3 days at 9:00 AM (`0 9 */3 * *`)
- **Job ID**: 43365de91720
- **Next Run**: April 19, 2026

### Pipeline Steps
1. Research trending evergreen topic
2. Write 1800-3000 word SEO article
3. Insert 3-6 affiliate links with disclosure (prioritizing high-commission programs)
4. Format as Jekyll Markdown
5. Save to ~/contentempire/posts/
6. Extract optimization lessons

## Article Queue (Evergreen Topics)
1. Best Container Vegetables for Apartment Beginners ✓
2. How to Start an Indoor Herb Garden on a Budget
3. Best Grow Lights for Small Apartments
4. Self-Watering Container Gardens for Busy People
5. Balcony Garden Ideas for Renters
6. Easiest Herbs to Grow Indoors for Beginners
7. Container Gardening Soil Guide
8. Small Space Vertical Garden Ideas
9. Windowsill Garden Setup for Beginners
10. Apartment Composting Methods
11. Best Plants for Low-Light Apartments
12. Container Garden Pest Control Naturally
13. How to Grow Tomatoes in Containers
14. Microgreens Growing Guide for Beginners
15. Kitchen Counter Herb Garden Ideas

## First Sample Article
**File**: `2026-04-18-best-container-vegetables-apartment-beginners.md`
**Topic**: Best Container Vegetables for Apartment Beginners in 2026
**Word Count**: ~2,600 words
**Affiliate Links**: 7 optimized links
  - 4x Seeds Now (20-25% commission)
  - 2x Gardener's Supply (8-12% commission)
  - 1x Click & Grow (10% commission)

## Commands

### Generate Article Manually
```bash
# Run the full pipeline
hermes skill:contentempire-master

# Or run individual agents
hermes skill:contentempire-researcher
hermes skill:contentempire-seowriter
hermes skill:contentempire-affiliate
hermes skill:contentempire-publisher
```

### Manage Cron Job
```bash
# List jobs
hermes cron list

# Pause publishing
hermes cron pause 43365de91720

# Resume publishing
hermes cron resume 43365de91720

# Run immediately (test)
hermes cron run 43365de91720
```

## Affiliate Disclosure Template
```markdown
*This post contains affiliate links. If you purchase through these links, 
I may earn a commission at no extra cost to you. We only recommend 
products we genuinely believe will help your garden thrive.*
```

## Content Guidelines
- Target: 1800-3000 words
- Structure: H1 + 4-6 H2s + H3s
- Elements: Tables, bullet lists, Quick Tips, FAQ
- Tone: Friendly, encouraging, beginner-focused
- Images: Suggest featured image in front-matter
- **Affiliates**: 3-6 links per article, prioritize high-commission programs

## Learning Loop
After each article, the optimizer extracts:
- What worked well
- What to improve
- Keyword insights
- Affiliate performance notes
- Structure effectiveness

Lessons are stored in `~/contentempire/lessons/` and fed back to improve future articles.

---

*ContentEmpire - Growing knowledge for small-space gardeners*
# Test commit to trigger redeploy
