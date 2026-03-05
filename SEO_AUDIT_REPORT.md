# Comprehensive SEO Audit: azledrainage.com
**Audit Date:** February 14, 2026
**Prepared by:** Claude Code (Firecrawl + Perplexity)
**Site:** https://www.azledrainage.com
**Business:** Azle Drainage | Drainage Contractor | Azle, TX (30-mile radius)

---

## SEO HEALTH SCORE: NEEDS WORK (6/10)

**What's good:** Solid page structure, every page has titles/descriptions/H1s, schema on core pages, decent content depth, HTTPS properly configured, all images have alt text, all pages return 200 status.

**What's broken:** No sitemap.xml, no robots.txt, expired promo on 17 pages, fake phone number on service-area.html, 7 pages missing canonicals/schema, weak internal linking on service pages, thin templated content on smaller city pages, no blog, limited backlink profile, local directory presence unclear.

---

## PART 1: TECHNICAL SEO FINDINGS

### 1.1 Site Infrastructure

| Check | Status | Details |
|-------|--------|---------|
| **sitemap.xml** | MISSING | Returns Vercel 404. No sitemap exists. |
| **robots.txt** | MISSING | Returns Vercel 404. No robots.txt exists. |
| **HTTPS** | PASS | All pages served over HTTPS, no mixed content. |
| **Hosting** | Vercel | Static site, fast response times. |
| **Total Pages** | 24 | 1 homepage, 6 service, 10 location, 3 landing, FAQ, service-area, privacy, terms |

### 1.2 Page-by-Page Audit (All 24 Pages)

#### Core Pages

| Page | Title | Title Length | Meta Desc | H1 Count | Schema | Canonical | Word Count | Status |
|------|-------|-------------|-----------|----------|--------|-----------|------------|--------|
| **index.html** | Azle Drainage \| Professional Drainage Solutions in Azle, TX | 61 chars | Present | 1 | LocalBusiness | Present (non-www) | ~1,500 | 200 |
| **french-drains.html** | French Drain Installation & Repair - Azle, TX & Surrounding Areas \| Azle Drainage | 81 chars | Present (expired promo) | 1 | Present | Present (non-www) | ~1,800 | 200 |
| **yard-grading.html** | Yard Grading & Leveling Services - Azle, TX & Surrounding Areas \| Azle Drainage | 81 chars | Present (expired promo) | 1 | Present | Present (non-www) | ~1,600 | 200 |
| **catch-basins.html** | Catch Basin Installation & Repair - Azle, TX & Surrounding Areas \| Azle Drainage | 82 chars | Present (expired promo) | 1 | Present | Present (non-www) | ~1,800 | 200 |
| **downspout-extensions.html** | Downspout Extensions & Drainage - Azle, TX & Surrounding Areas \| Azle Drainage | 80 chars | Present (expired promo) | 1 | Present | Present (non-www) | ~1,900 | 200 |
| **foundation-drainage.html** | Foundation Drainage Solutions - Azle, TX & Surrounding Areas \| Azle Drainage | 77 chars | Present (expired promo) | 1 | Present | Present (non-www) | ~2,000 | 200 |
| **drainage-repairs.html** | Drainage System Repair & Maintenance - Azle, TX & Surrounding Areas \| Azle Drainage | 84 chars | Present (expired promo) | 1 | Present | Present (non-www) | ~2,000 | 200 |

#### Location Pages

| Page | Title | Title Length | Meta Desc | H1 | Schema | Canonical | Word Count | Status |
|------|-------|-------------|-----------|-----|--------|-----------|------------|--------|
| **azle.html** | Professional Drainage Solutions in Azle, TX - Serving the Heart of Parker County \| Azle Drainage | **96 chars (TOO LONG)** | Present (expired promo) | 1 | Present | Present | ~1,500 | 200 |
| **weatherford.html** | Professional Drainage Solutions in Weatherford, TX \| Local Weatherford Experts | 79 chars | Present (expired promo) | 1 | Present | Present | ~1,500 | 200 |
| **fort-worth.html** | Professional Drainage Solutions in Fort Worth, TX \| Local Fort Worth Experts | 76 chars | Present (expired promo) | 1 | Present | Present | ~1,500 | 200 |
| **springtown.html** | Professional Drainage Solutions in Springtown, TX \| Local Springtown Experts | 76 chars | Present (expired promo) | 1 | Present | Present | ~1,400 | 200 |
| **boyd.html** | Professional Drainage Solutions in Boyd, TX \| Local Boyd Experts | 64 chars | Present (expired promo) | 1 | Present | Present | ~1,300 | 200 |
| **willow-park.html** | Professional Drainage Solutions in Willow Park, TX \| Local Willow Park Experts | 78 chars | Present (expired promo) | 1 | Present | Present | ~1,300 | 200 |
| **saginaw.html** | Professional Drainage Solutions in Saginaw, TX \| Local Saginaw Experts | 71 chars | Present (expired promo) | 1 | Present | Present | ~1,300 | 200 |
| **reno.html** | Professional Drainage Solutions in Reno, TX \| Local Reno Experts | 64 chars | Present (expired promo) | 1 | Present | Present | ~1,300 | 200 |
| **briar.html** | Professional Drainage Solutions in Briar, TX \| Local Briar Experts | 66 chars | Present (expired promo) | 1 | Present | Present | ~1,300 | 200 |
| **newark.html** | Professional Drainage Solutions in Newark, TX \| Local Newark Experts | 68 chars | Present (expired promo) | 1 | Present | Present | ~1,300 | 200 |

#### Other Pages

| Page | Title | Meta Desc | H1 | Schema | Canonical | OG Tags | Status |
|------|-------|-----------|----|--------|-----------|---------|--------|
| **faq.html** | Frequently Asked Questions - Azle Drainage Solutions \| Complete FAQ Guide | Present (good!) | 1 | **MISSING** | **MISSING** | **MISSING** | 200 |
| **service-area.html** | Our Service Area - 30 Minutes from Azle, TX \| Azle Drainage | Present | 1 | **MISSING** | **MISSING** | **MISSING** | 200 |
| **privacy-policy.html** | Privacy Policy - Azle Drainage | Present | 1 | **MISSING** | **MISSING** | **MISSING** | 200 |
| **terms-of-service.html** | Terms of Service - Azle Drainage | Present | 1 | **MISSING** | **MISSING** | **MISSING** | 200 |
| **free-estimate.html** | Free Drainage Estimate \| Azle Drainage | Present | 1 | **MISSING** | **MISSING** | **MISSING** | 200 |
| **free-estimate-b.html** | Free Drainage Estimate \| Azle Drainage (**DUPLICATE TITLE**) | Present | 1 | **MISSING** | **MISSING** | **MISSING** | 200 |
| **free-estimate-c.html** | Free Drain Estimate \| Azle Drainage | Present (says "plumbers" - WRONG) | 1 | **MISSING** | **MISSING** | **MISSING** | 200 |

### 1.3 Critical Technical Issues Found

#### CRITICAL: No sitemap.xml
No sitemap exists at `azledrainage.com/sitemap.xml`. Search engines must discover all 24 pages through crawling alone. Some pages (especially landing pages and the FAQ) may not be indexed.

#### CRITICAL: No robots.txt
No robots.txt exists. No crawl directives for search engines, no sitemap reference.

#### CRITICAL: Fake Phone Number on service-area.html
`service-area.html` contains placeholder phone number **(817) 555-0123** in THREE places:
- Line 726: CTA button `Call (817) 555-0123`
- Line 896: Footer phone link
- Line 965: JavaScript error message

The correct number is **(682) 516-6797**. Any visitor clicking "Call" on this page reaches a dead line.

#### CRITICAL: Expired Promo on 17+ Pages
"END OF YEAR SALE: $200 OFF PROJECTS $1,200+ / BOOK BEFORE DECEMBER 31ST" appears on ALL service pages, ALL location pages, and the homepage. It is now February 2026. This is actively harming credibility. The expired promo appears in:
- H2 heading text
- CTA button text ("CLAIM YOUR $200 OFF")
- 15+ meta descriptions still reference "$200 OFF"
- OG descriptions
- Countdown text "Only 31 Days Left!"

**Only the homepage `index.html` has been partially updated** (meta description now says "Free drainage estimates") but the on-page H2 still shows the old promo from the Firecrawl scrape.

#### HIGH: Canonical URL Domain Mismatch
All canonical tags use `https://azledrainage.com` (no www) but the site serves from `https://www.azledrainage.com` (with www). This creates confusion about the preferred domain version.

#### HIGH: 7 Pages Missing Canonical Tags
- faq.html, service-area.html, privacy-policy.html, terms-of-service.html, free-estimate.html, free-estimate-b.html, free-estimate-c.html

#### HIGH: No FAQPage Schema on FAQ Page
The FAQ page has 20 well-written Q&As (~2,500 words) but NO FAQPage structured data. Adding this schema would enable rich FAQ snippets in Google SERPs -- one of the highest-ROI SEO changes available.

#### MEDIUM: Weak Internal Linking on Service Pages
All 6 service pages link only to `#contact`, `tel:`, `sms:`, and legal pages. They do NOT cross-link to other service pages or location pages. Location pages are better (they link to all 6 services).

#### MEDIUM: Thin/Templated Location Page Content
Boyd, Reno, Briar, and Newark pages use identical templated content with city names swapped. All have the same "Unique Drainage Challenges" subsections word-for-word. Risk of Google treating these as doorway pages.

#### MEDIUM: free-estimate-c.html Misleading Claims
- Claims "500+ 5-Star Reviews" (unverifiable, likely false)
- Meta description says "Licensed plumbers" (they're drainage contractors, not plumbers)

#### LOW: Duplicate Title Tags
`free-estimate.html` and `free-estimate-b.html` share the same title: "Free Drainage Estimate | Azle Drainage"

### 1.4 What's Working Well (Technical)
- All 24 pages return HTTP 200 (no broken pages)
- Every page has exactly 1 H1 tag
- 100% meta description coverage
- 100% image alt text coverage
- HTTPS properly implemented, no mixed content
- WebP images with PNG fallbacks using `<picture>` elements
- Lazy loading on below-fold images
- Image dimensions specified (preventing CLS)
- 17/24 pages have LocalBusiness JSON-LD schema
- 17/24 pages have canonical tags
- 17/24 pages have full OG tags
- Strong content depth on service pages (1,600-2,000 words each)
- FAQ page has 20 detailed Q&As

---

## PART 2: COMPETITOR & KEYWORD RESEARCH

### 2.1 Competitive Landscape

#### Direct Azle/Parker County Competitors

| Company | Website | Location | Services | Threat Level |
|---------|---------|----------|----------|--------------|
| **Azle Drainage (YOU)** | azledrainage.com | Azle, TX | French drains, grading, catch basins, downspout extensions, foundation drainage, repairs | -- |
| **Twin County Outdoor Services** | twincountyoutdoorservices.com | Aledo, TX | French drains, landscaping | Low |
| **Alfredo Olvera Landscaping** | landscapecontractorstx.com | Weatherford, TX | French drain installation/repair | Low |
| **Weatherford Foundation Repair Pros** | weatherfordfoundationrepairpros.com | Weatherford, TX | Foundation repair + drainage | Medium |
| **Circle D Construction** | getcircled.com | Azle area | Sprinklers, French drains, surface drains, sump pumps | Medium |

#### Fort Worth / DFW Competitors (serve the region)

| Company | Website | Notes | Threat Level |
|---------|---------|-------|--------------|
| **Advantage Drainage** | advantagedrainage.com | 30+ years, A+ BBB, Dallas/Tarrant County | High |
| **Fort Worth Drain Pros** | fortworthdrainpros.com | 30+ years, all 5-star ratings | High |
| **HD Foundations, Inc.** | hdfoundationrepair.com | 20+ years, A+ BBB, strong SEO | High |
| **Texas Foundation Experts** | tfexperts.com | Extensive location pages for many cities | High |
| **Dallas Drainage Pros** | dallasdrainagepros.com | Strong content/blog strategy, major brand | Medium |
| **Clearfork Lawn Care** | clearforklawncare.com | Fort Worth, strong drainage page | Medium |
| **S&T Landscape Services** | sandtlandscape.com | Family-owned since 1997, Fort Worth/Arlington | Medium |
| **DFW Sod Installer** | dfwsodinstaller.com | Strong educational content, laser-leveled accuracy | Medium |

#### Lead-Gen / Directory Sites (Compete for Rankings but Not Real Businesses)

| Site | Strategy |
|------|----------|
| Jenson French Drains (jensonfrenchdrains.com) | Programmatic Azle, TX landing page |
| TJ's Yard Drainage (tjsyarddrainage.com) | Auto-generated city pages |
| Drain Tile Installation (draintileinstallation.com) | Auto-generated city pages |
| Various "Buzz" branded sites | Lead-gen with templated content |

#### Key Competitive Insights
1. **No dominant pure-play drainage company exists in Azle/Parker County.** Azle Drainage is the only dedicated drainage contractor based in Azle.
2. **Foundation repair companies are major SEO competitors.** HD Foundations, Texas Foundation Experts, RS Foundations all have drainage pages with large, well-linked sites.
3. **Real competition for Fort Worth keywords is fierce.** 10+ established businesses compete for "yard drainage fort worth tx."
4. **Azle-specific keywords have almost zero competition** from real businesses -- only lead-gen directories.
5. **Weatherford and Springtown keywords are underserved** -- opportunity to dominate.

### 2.2 Keyword Research

#### High-Intent Service Keywords (Money Keywords)

| Keyword | Est. Monthly Volume (DFW) | Competition | Opportunity for Us |
|---------|--------------------------|-------------|-------------------|
| french drain installation fort worth | 200-500 | High | Low (need dedicated FW page + backlinks) |
| french drain installation near me | 500-1,000 | High | Medium (proximity advantage in Parker County) |
| drainage contractor fort worth | 100-200 | Medium-High | Low-Medium |
| yard drainage fort worth | 100-300 | High | Low |
| **french drain installation azle tx** | **10-30** | **Very Low** | **HIGH - easy to dominate** |
| **drainage contractor azle tx** | **10-20** | **Very Low** | **HIGH - easy to dominate** |
| **yard drainage azle tx** | **10-20** | **Very Low** | **HIGH - easy to dominate** |
| **french drain weatherford tx** | **20-50** | **Low** | **HIGH - underserved** |
| **drainage contractor weatherford tx** | **10-30** | **Low** | **HIGH - underserved** |
| french drain cost fort worth | 50-150 | Medium | Medium (pricing page opportunity) |
| foundation drainage repair fort worth | 50-100 | Medium | Medium |

#### Problem-Based Keywords (Capture People with Drainage Issues)

| Keyword | Est. Monthly Volume | Intent |
|---------|---------------------|--------|
| standing water in yard | 2,000-5,000 | Informational/Commercial |
| standing water in yard after rain | 500-1,000 | Informational/Commercial |
| water pooling near foundation | 200-500 | Commercial (high urgency) |
| yard flooding solutions | 200-500 | Commercial |
| how to fix drainage in yard | 500-1,000 | Informational (can convert) |
| water standing in yard clay soil | 50-200 | Commercial (TX specific) |
| foundation drainage problems | 100-200 | Commercial (high urgency) |
| soggy yard fix | 100-200 | Commercial |
| erosion in yard | 200-500 | Informational |

#### Long-Tail / Question Keywords

| Keyword | Content Opportunity |
|---------|-------------------|
| how much does french drain installation cost in texas | Pricing guide page |
| do i need a french drain or surface drain | Comparison blog post |
| best drainage solution for clay soil | Blog post (TX specific) |
| can poor drainage cause foundation damage | Blog post (bridges to foundation) |
| does homeowners insurance cover drainage | FAQ/blog content |
| how deep should a french drain be | FAQ content |
| french drain vs catch basin | Service comparison page |

### 2.3 Current Google Rankings (Page 1 Analysis)

#### "french drain installation azle tx"
| Rank | Result | Notes |
|------|--------|-------|
| 1 | **Azle Drainage** (azledrainage.com) | We're #1 for our hometown keyword |
| 2 | Jenson French Drains (lead-gen page) | Thin auto-generated content |
| 3 | TJ's Yard Drainage (lead-gen page) | Thin auto-generated content |
| 4 | Drain Tile Installation (lead-gen) | Thin auto-generated content |
| 5-10 | HomeAdvisor, Thumbtack, Angi directories | Directory listings |

**Assessment: STRONG position. Protect this ranking.**

#### "drainage contractor weatherford tx"
| Rank | Result | Notes |
|------|--------|-------|
| 1 | Weatherford Foundation Repair Pros | Dedicated drainage page |
| 2 | Texas Foundation Experts | Weatherford city page |
| 3 | Alfredo Olvera Landscaping | French drains page |
| 4-5 | "Buzz" lead-gen sites | Auto-generated pages |
| 6-10 | HomeAdvisor, Thumbtack, Angi | Directories |

**Assessment: OPPORTUNITY. No dominant drainage company. Our weatherford.html page needs more unique content + internal links to compete.**

#### "yard drainage fort worth tx"
| Rank | Result | Notes |
|------|--------|-------|
| 1 | Texas Foundation Experts | Large site, many city pages |
| 2 | Fort Worth Drain Pros | 30+ years, strong brand |
| 3 | HD Foundations | A+ BBB, strong domain |
| 4 | S&T Landscape Services | Since 1997 |
| 5 | Clearfork Lawn Care | Strong content page |

**Assessment: VERY COMPETITIVE. Dominated by established Fort Worth businesses. Long-term play needed.**

### 2.4 Common North Texas Drainage Problems (Content Opportunities)

Based on research, the top problems homeowners face with North Texas clay soil:

1. **Standing water / pooling after rain** -- #1 complaint. Clay soil absorbs water 10x slower than sandy soil.
2. **Foundation damage from poor drainage** -- 80%+ of foundation problems are water-related. Foundation repair costs $10K-$20K+.
3. **Soil erosion** -- Heavy rains wash away topsoil, create ruts and gullies.
4. **Soggy / unusable yard** -- Saturated clay stays wet for days.
5. **Negative grading** -- 30-40% of drainage problems trace to water flowing toward the house.
6. **Clogged/undersized downspouts** -- Concentrated water 1-2 feet from foundation.
7. **Neighbor's runoff** -- Low-spot properties in new subdivisions.
8. **Mosquito breeding** -- Standing water creates health hazards.
9. **Mold and mildew** -- Persistent moisture near foundations.
10. **Slab heave** -- Water under concrete slab causes uneven floors.

### 2.5 Recommended Content / Blog Topics (Prioritized)

#### Tier 1: Money Pages (Create These First)
1. "French Drain Installation Cost in Azle & Parker County [2026 Guide]"
2. "Emergency Drainage Services in Azle, TX"
3. Dedicated location pages for: Mineral Wells, Hudson Oaks, Aledo, Annetta, Peaster

#### Tier 2: Educational Blog Posts (Build Authority)
4. "Why Is Water Standing in My Yard? Common Causes in North Texas Clay Soil"
5. "How North Texas Clay Soil Causes Foundation Damage (And How Drainage Prevents It)"
6. "French Drain vs. Surface Drain vs. Catch Basin: Which Do You Need?"
7. "5 Signs You Need Professional Drainage Help"
8. "DIY Drainage Fixes vs. Hiring a Pro: What North Texas Homeowners Need to Know"
9. "How to Protect Your Foundation During North Texas Storm Season"
10. "The Complete Guide to Yard Grading for North Texas Homeowners"

#### Tier 3: Hyper-Local Content (Hard for Competitors to Replicate)
11. "Common Drainage Problems in Parker County Neighborhoods"
12. "Drainage Solutions for Homes Near Eagle Mountain Lake"
13. "Azle, TX Soil Guide: Why Your Yard Floods and What to Do About It"
14. "Before & After: Drainage Projects in Azle/Weatherford/Springtown" (case studies with real photos)

---

## PART 3: ON-PAGE SEO REVIEW (5 Key Pages)

### Homepage (azledrainage.com)

| Check | Status | Details |
|-------|--------|---------|
| Title optimized? | YES | "Azle Drainage \| Professional Drainage Solutions in Azle, TX" -- contains brand + primary keyword + location |
| Meta description with CTA? | YES | Includes phone number and "24/7 Response" CTA |
| H1 contains keyword? | PARTIAL | "We Fix Standing Water." -- great hook but doesn't contain "drainage" or "Azle" |
| Content depth (500+ words)? | YES | ~1,500 words visible + ~300 in expandable SEO section |
| Internal links? | YES | 23 internal links to service and location pages |
| Schema markup? | YES | LocalBusiness JSON-LD with address, phone, services, hours, geo |
| Images optimized? | YES | All images have alt text, WebP format, lazy loading |
| **Issues** | | Expired promo still in H2 and OG tags; consider adding "Azle" or "drainage" to H1 |

### French Drains (french-drains.html)

| Check | Status | Details |
|-------|--------|---------|
| Title optimized? | YES | "French Drain Installation & Repair - Azle, TX" -- exact match keyword + location |
| Meta description with CTA? | PARTIAL | Has CTA but references expired "$200 OFF" promo |
| H1 contains keyword? | YES | "French Drain Installation & Repair" |
| Content depth? | YES | ~1,800 words with detailed process, benefits, FAQ |
| Internal links? | WEAK | Only 5 links (self-referencing + legal pages). No cross-links to catch-basins, yard-grading, or location pages |
| Schema markup? | YES | Present |
| **Issues** | | Expired promo in meta description; needs cross-links to other services and locations |

### Azle Location Page (azle.html)

| Check | Status | Details |
|-------|--------|---------|
| Title optimized? | PARTIAL | 96 characters -- will be truncated in SERPs. Too long. |
| Meta description with CTA? | PARTIAL | Expired promo reference |
| H1 contains keyword? | YES | "Professional Drainage Solutions in Azle, TX" |
| Content depth? | YES | ~1,500 words with local-specific content |
| Internal links? | YES | 10 internal links to service pages |
| Schema markup? | YES | Present |
| **Issues** | | Title too long (truncation); expired promo; could use more genuinely local content (neighborhoods, landmarks) |

### Weatherford (weatherford.html)

| Check | Status | Details |
|-------|--------|---------|
| Title optimized? | YES | 79 chars, contains "Weatherford, TX" + "Drainage Solutions" |
| Meta description with CTA? | PARTIAL | Expired promo |
| H1 contains keyword? | YES | "Professional Drainage Solutions in Weatherford, TX" |
| Content depth? | YES | ~1,500 words |
| Internal links? | YES | 10 links |
| Schema markup? | YES | Present |
| **Issues** | | Expired promo; could benefit from Weatherford-specific content (neighborhoods like Canyon Creek, Lakeshore Dr areas) |

### Fort Worth (fort-worth.html)

| Check | Status | Details |
|-------|--------|---------|
| Title optimized? | YES | 76 chars, good keyword placement |
| Meta description with CTA? | PARTIAL | Expired promo |
| H1 contains keyword? | YES | "Professional Drainage Solutions in Fort Worth, TX" |
| Content depth? | YES | ~1,500 words |
| Internal links? | YES | 10 links |
| Schema markup? | YES | Present |
| **Issues** | | Expired promo; Fort Worth is our most competitive market -- this page needs significantly more unique content (2,500+ words), neighborhood-specific sections, and backlinks to compete |

---

## PART 4: LOCAL SEO STATUS

### 4.1 Google Business Profile (GBP)
**Status: NOT FOUND / NOT CLAIMED**

Perplexity searched extensively and found NO Google Business Profile for "Azle Drainage" in Azle, Texas. The Azle Chamber of Commerce directory also does NOT list Azle Drainage among its members. Without a GBP, the business is invisible in:
- Google's Local Pack (3-pack map results)
- Google Maps searches
- "Near me" queries
- Knowledge panels for branded searches

Meanwhile, competitors like Wallace Plumbing (25+ years, established GBP) and Circle D Construction are capturing the Azle drainage market in local search results.

**Action needed:** Create a Google Business Profile IMMEDIATELY at business.google.com:
- Business name: Azle Drainage
- Address: 1701 Rider Rd, Azle, TX 76020 (matches schema on website)
- Phone: (682) 516-6797
- Category: "Drainage Contractor" or "Drainage Service"
- Service area: 30-mile radius from Azle
- Upload before/after project photos
- Begin collecting Google reviews from past customers

### 4.2 Directory Listings

| Platform | Listed? | Notes |
|----------|---------|-------|
| **Google Business Profile** | Unconfirmed | Needs verification |
| **Yelp** | Not found | No listing detected |
| **BBB** | Not found | No listing detected |
| **Angi (formerly Angie's List)** | Not found | No listing detected |
| **HomeAdvisor** | Not found | No listing detected |
| **Thumbtack** | Not found | No listing detected |
| **Facebook Business** | Not found | No listing detected |
| **Apple Maps** | Not found | No listing detected |
| **Bing Places** | Not found | No listing detected |

### 4.3 Recommended Local Directories

**Tier 1 (Create ASAP):**
- Google Business Profile (if not already active)
- Yelp
- Facebook Business Page
- BBB (Better Business Bureau)
- Apple Maps / Apple Business Connect
- Bing Places for Business

**Tier 2 (High Value for Contractors):**
- Angi
- HomeAdvisor
- Thumbtack
- Nextdoor Business
- Houzz
- Porch.com

**Tier 3 (Local/Industry):**
- Azle Chamber of Commerce
- Parker County business directories
- BuildZoom
- Local contractor associations (PHCC, NARI)
- Local newspaper/media business listings

### 4.4 Online Reputation
**Status: ZERO REVIEWS FOUND ANYWHERE**

Perplexity searched across Google, Yelp, BBB, Angi, HomeAdvisor, Thumbtack, Facebook, and other platforms. No reviews, ratings, or reputation signals were found for "Azle Drainage" or azledrainage.com on any platform.

The website displays 3 testimonials (John M., Sarah K., Mike R.) with 5-star ratings and "G" badges suggesting Google Reviews -- but these could not be verified externally. The free-estimate-c.html landing page claims "500+ 5-Star Reviews" which is demonstrably false.

When potential customers search "Azle Drainage reviews," nothing comes up. This is a critical trust gap.

**Action needed:**
- Create Google Business Profile and begin collecting reviews immediately
- Ask past satisfied customers for Google reviews (even 5-10 genuine reviews at 4.5+ stars would be transformative)
- Set up a systematic review request process (email/SMS after job completion)
- Respond to all reviews publicly

---

## PART 5: COMPILED REPORT

### 1. SEO Health Score: NEEDS WORK (6/10)

| Category | Score | Notes |
|----------|-------|-------|
| Technical SEO | 5/10 | No sitemap, no robots.txt, expired promos, fake phone number |
| On-Page SEO | 7/10 | Good titles/descriptions/H1s, but expired content and weak internal linking |
| Content | 6/10 | Decent service page depth, but thin city pages and no blog |
| Local SEO | 4/10 | Schema exists but no confirmed GBP, no directory listings found |
| Competitor Position | 7/10 | Strong #1 for Azle keywords, weak for Fort Worth/Weatherford |
| **Overall** | **6/10** | **Good foundation, but critical issues need immediate fixes** |

### 2. Technical Issues Found (Summary)

| Priority | Issue | Impact |
|----------|-------|--------|
| CRITICAL | No sitemap.xml | Pages may not be indexed |
| CRITICAL | No robots.txt | No crawl directives |
| CRITICAL | Fake phone (817) 555-0123 on service-area.html | Lost leads |
| CRITICAL | Expired "$200 OFF Dec 31st" promo on 17 pages | Credibility damage |
| HIGH | 7 pages missing canonical tags | Duplicate content risk |
| HIGH | No FAQPage schema on faq.html | Missed rich snippet opportunity |
| HIGH | Canonical domain mismatch (www vs non-www) | Crawl confusion |
| MEDIUM | Service pages have no cross-links | Weak internal link equity |
| MEDIUM | Thin/templated content on 4 city pages | Doorway page risk |
| MEDIUM | "500+ reviews" claim + "plumber" label on landing page | Trust issues |
| LOW | Duplicate title on 2 landing pages | Minor indexing confusion |
| LOW | service-area.html missing links to 7/10 city pages | Missed link equity |

### 3. Quick Wins (Fix Today)

1. **Create sitemap.xml** -- List all 24 pages. Deploy to site root. Submit to Google Search Console.
2. **Create robots.txt** -- Add `Sitemap: https://www.azledrainage.com/sitemap.xml` directive.
3. **Fix fake phone number on service-area.html** -- Replace (817) 555-0123 with (682) 516-6797 in 3 places.
4. **Remove expired promo** from all 17 pages -- Replace "END OF YEAR SALE: $200 OFF" H2s, CTAs, and meta descriptions with an evergreen offer (e.g., "Free Same-Week Estimates").
5. **Fix free-estimate-c.html** -- Remove "500+ 5-Star Reviews" claim. Change "plumbers" to "drainage experts" in meta description.
6. **Add FAQPage schema to faq.html** -- This is a copy-paste job with huge SERP visibility potential (20 Q&As = 20 chances at rich snippets).

### 4. Content Gaps

| Gap | Why It Matters | Priority |
|-----|---------------|----------|
| **No blog** | Zero informational content to capture problem-aware searchers ("standing water in yard," "clay soil drainage") | High |
| **No pricing/cost page** | "French drain cost texas" has 50-150 monthly searches with high purchase intent | High |
| **Missing city pages** (Mineral Wells, Hudson Oaks, Aledo, Annetta, Peaster) | Nearby cities with no competition | Medium |
| **No comparison content** ("French drain vs catch basin") | Captures consideration-stage buyers | Medium |
| **No case study / before-after content** | Builds trust, impossible for competitors to copy | Medium |
| **Thin city pages** (Boyd, Reno, Briar, Newark) | Templated content risks Google penalty | Medium |
| **No foundation-drainage bridge content** | 80% of foundation problems = drainage issues. Huge keyword overlap opportunity | Medium |

### 5. Competitor Comparison

| Factor | Azle Drainage | Advantage Drainage | Fort Worth Drain Pros | HD Foundations |
|--------|--------------|-------------------|----------------------|----------------|
| Based in | Azle (unique advantage) | DFW | Fort Worth | DFW |
| Years in business | Unknown | 30+ | 30+ | 20+ |
| BBB | Not listed | A+ | Unknown | A+ |
| Google Reviews | Unverified | Established | All 5-star | 5-star |
| Blog/Content | None | Minimal | Minimal | Some |
| City pages | 10 | Few | Few | Many |
| Service pages | 6 (strong) | Multiple | Multiple | Multiple |
| Schema markup | 17/24 pages | Unknown | Unknown | Unknown |
| Sitemap | NO | Likely yes | Likely yes | Likely yes |
| Backlinks | Unknown/weak | Established | Established | Strong |

**Why competitors beat us (where they do):**
- Established domain authority from years of backlinks
- BBB and directory listings create citation signals
- Foundation repair companies have massive sites with hundreds of pages
- Fort Worth companies have proximity advantage for FW keywords

**Our advantages:**
- Only dedicated drainage company IN Azle
- Hyper-local positioning (no one else targets Azle specifically)
- Strong on-page SEO fundamentals (just need fixes)
- Untapped Weatherford/Springtown market

### 6. Local SEO Status

| Signal | Status | Action Needed |
|--------|--------|---------------|
| Google Business Profile | Unconfirmed | Verify or create immediately |
| NAP consistency | Phone mismatch on service-area.html | Fix fake number |
| Local directories | None found | Create listings on Yelp, BBB, Angi, HomeAdvisor, Thumbtack, Facebook |
| Reviews | 3 on website, unverified Google count | Build review generation system |
| Local content | 10 city pages exist | Add genuine local details, photos |
| Schema LocalBusiness | Present on 17 pages | Add to remaining 7 |
| Service area defined | In schema (30mi radius) | Matches GBP service area? |

### 7. Priority Action Items (Ranked)

#### THIS WEEK (Critical Fixes)
| # | Action | Est. Time | Impact |
|---|--------|-----------|--------|
| 1 | Fix fake phone (817) 555-0123 on service-area.html | 5 min | Critical |
| 2 | Create & deploy sitemap.xml | 15 min | Critical |
| 3 | Create & deploy robots.txt | 5 min | Critical |
| 4 | Remove/replace expired "$200 OFF" promo on all 17 pages (H2s, CTAs, meta descriptions, OG tags) | 2 hrs | Critical |
| 5 | Fix free-estimate-c.html claims ("500+ reviews", "plumbers") | 10 min | High |
| 6 | Verify/create Google Business Profile | 30 min | Critical |

#### THIS MONTH (High-Impact SEO)
| # | Action | Est. Time | Impact |
|---|--------|-----------|--------|
| 7 | Add FAQPage schema to faq.html | 30 min | High |
| 8 | Add canonical tags to 7 missing pages | 20 min | High |
| 9 | Fix canonical domain consistency (use www everywhere) | 30 min | High |
| 10 | Add OG tags to 7 missing pages | 30 min | Medium |
| 11 | Add cross-links between all service pages | 1 hr | High |
| 12 | Submit sitemap to Google Search Console | 15 min | High |
| 13 | Create Yelp, Facebook, BBB, Angi listings | 2 hrs | High |

#### NEXT 30-60 DAYS (Growth)
| # | Action | Est. Time | Impact |
|---|--------|-----------|--------|
| 14 | Write 3-5 blog posts targeting problem keywords | 8-10 hrs | High |
| 15 | Create pricing/cost guide page | 2-3 hrs | High |
| 16 | Enrich thin city pages (Boyd, Reno, Briar, Newark) with unique content | 4-6 hrs | Medium |
| 17 | Create new city pages (Mineral Wells, Hudson Oaks, Aledo) | 3-4 hrs | Medium |
| 18 | Build case study content with real project photos | 4-6 hrs | Medium |
| 19 | Shorten azle.html title tag (currently 96 chars, too long) | 5 min | Low |
| 20 | Implement review generation system (email/SMS after service) | 2 hrs | High |

#### ONGOING
| # | Action | Frequency | Impact |
|---|--------|-----------|--------|
| 21 | Publish 2-4 blog posts per month | Monthly | High |
| 22 | Solicit Google reviews from customers | After every job | High |
| 23 | Post to Google Business Profile | Weekly | Medium |
| 24 | Monitor rankings for target keywords | Monthly | Medium |
| 25 | Build local backlinks (chamber, sponsors, local media) | Ongoing | High |

---

*Report generated using Firecrawl (site crawl + page analysis) and Perplexity (competitor research + keyword data). DataForSEO was unavailable due to API authorization issues -- keyword volume estimates are approximate ranges from Perplexity research.*
