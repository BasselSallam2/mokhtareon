# Mokhtareon Brand Guidelines

**Brand:** Mokhtareon / المخترعون  
**Document:** Brand Identity Guidelines  
**Version:** 1.0  
**Year:** 2026  
**Tagline:** Where discovery and creativity begin  
**Arabic tagline:** حيث تبدأ رحلة الاكتشاف والإبداع

## Brand Foundation

Mokhtareon / المخترعون is an Egyptian educational academy focused on STEM and creativity for children. The visual identity reflects trust, energy, warmth, curiosity, and approachability through calm blue tones, vibrant orange accents, rounded forms, clear layouts, and friendly language.

### Brand Personality

- **Creative and curious:** Spark wonder and make learning feel like an adventure.
- **Trustworthy and educational:** Offer structured programs that parents and educators can rely on.
- **Friendly and approachable:** Use rounded shapes, warm colors, and encouraging language.
- **Modern and clean:** Keep layouts clear, organized, and supported by generous white space.

### Brand Keywords

- STEM
- Creativity / إبداع
- Children / أطفال
- Hands-on learning / عملي
- Discovery / اكتشاف

### Naming

Use `المخترعون` in Arabic and `Mokhtareon` in English consistently.

Avoid unofficial spellings such as:

- `Mukhtar3oon`
- `Mokhtarreon`

## Voice And Messaging

The brand voice is warm, encouraging, respectful, and clear. It should celebrate every step in the child's learning journey without sounding complicated or condescending.

### Taglines

- **Primary:** The journey of discovery starts here
- **Arabic primary:** رحلة الاكتشاف تبدأ من هنا
- **Secondary:** Educational programs designed for children to sharpen their skills
- **Arabic secondary:** برامج تعليمية مصممة للأطفال لصقل مهاراتهم

## Logo Identity

Maintain clear space around the logo equal to at least 50% of the logo width on all sides. Do not stretch, rotate, recolor, distort, add shadows, add outlines, or use the logo below the minimum size.

### Logo Asset Paths

Use these paths from the `mokhtareon-website` project root:

| Asset | Relative Path | Absolute Path | Usage |
| --- | --- | --- | --- |
| Primary logo mark | `imgs/image 34.svg` | `/home/bassel/projects/mokhtareon-projects/mokhtareon-website/imgs/image 34.svg` | Main website logo |
| Favicon / icon | `imgs/Artboard 1 copy.svg` | `/home/bassel/projects/mokhtareon-projects/mokhtareon-website/imgs/Artboard 1 copy.svg` | Browser favicon and small icon usage |
| Alternate logo artwork | `imgs/Artboard 1.svg` | `/home/bassel/projects/mokhtareon-projects/mokhtareon-website/imgs/Artboard 1.svg` | Alternate SVG logo artwork |

The HTML guide also mentions `imgs/logo.webp` for the booking form, but that file is not currently present in `mokhtareon-website/imgs`.

### Copy Examples

```bash
cp "/home/bassel/projects/mokhtareon-projects/mokhtareon-website/imgs/image 34.svg" ./image-34.svg
cp "/home/bassel/projects/mokhtareon-projects/mokhtareon-website/imgs/Artboard 1 copy.svg" ./favicon.svg
cp "/home/bassel/projects/mokhtareon-projects/mokhtareon-website/imgs/Artboard 1.svg" ./mokhtareon-logo-alt.svg
```

### Minimum Size

- **Digital:** 32px minimum height
- **Print:** 8mm minimum height

### Logo Do

- Use the logo on light, white, tinted, or primary blue backgrounds with enough contrast.
- Keep the original proportions.
- Prefer SVG or transparent PNG for web use.
- Keep the full-color version where possible.

### Logo Don't

- Do not place the logo on busy or low-contrast backgrounds.
- Do not add drop shadows, outlines, rotation, or color changes.
- Do not stretch or compress the logo.
- Do not use the logo below the minimum size.

## Color Palette

Blue builds trust and professionalism. Orange directs attention to calls to action, highlights, and interactive elements. Keep these colors consistent across all brand touchpoints.

| Color | Hex | Role |
| --- | --- | --- |
| Primary Blue | `#1364A2` | Buttons, footer, headings, links |
| Accent Orange | `#FF7500` | CTA, highlights, hover states, active elements |
| Body Text | `#2E3C46` | Paragraphs and content |
| Blue Tint | `#1364A240` | Page background tint, borders, shadows |
| White | `#FFFFFF` | Cards, forms, surfaces, text on blue |
| Light Background | `#F4F8FC` | Guideline pages and soft backgrounds |
| UI Blue | `#007BFF` | Language switcher UI only |
| Hero Gradient | `linear-gradient(135deg, #1364A2, #0d4d7a)` | Hero and major headings |

### Accessibility Notes

- `#2E3C46` on `#FFFFFF` gives good contrast for body text.
- White text on `#1364A2` is suitable for footers and blue sections.
- `#FF7500` works well for buttons and interactive elements, but avoid small orange body text on white.

## Typography

Use two typefaces to balance clarity and warmth:

- **Arabic:** `Tajawal`
- **English:** `Poppins`

### Arabic Type

- Font: `Tajawal`
- Weights: 400 Regular, 500 Medium, 700 Bold, 800 ExtraBold
- Source: Google Fonts
- Sample phrase: تعلم ممتع ومبدع

### English Type

- Font: `Poppins`
- Weights: 400 Regular, 600 SemiBold, 700 Bold
- Source: Google Fonts
- Sample phrase: Learning Made Fun

### Heading Rules

- Font: `Tajawal` for Arabic and `Poppins` for English.
- Weight: 700-800.
- Hero heading size: 28-44px.
- Section heading size: 22-28px.
- Card heading size: 18-22px.

### Body And UI Rules

- Base size: 16px.
- Line height: 1.5.
- Body text color: `#2E3C46`.
- Link color: `#1364A2`.
- Accent color: `#FF7500`.

## UI Components

### Buttons

- **Primary button:** `#FF7500` background, white text, 6px radius.
- **Secondary button:** Orange border, orange text, white background.
- **Link button:** Blue or orange link treatment depending on context.
- **Hover:** Use a subtle `translateY(-2px)` lift.

### Content Cards

- Background: `#FFFFFF`.
- Border radius: 12px.
- Shadow: `0 0 10px #1364A240`.
- Use clear headings and short supportive descriptions.

### Footer

- Background: `#1364A2`.
- Text: white.
- Top radius: 20px.
- Supports RTL Arabic content.

## Usage And Applications

### Social Media

- Use white or blue-tinted backgrounds.
- Use `Tajawal Bold` for Arabic headlines.
- Use `#1364A2` or `#FF7500` for headlines and emphasis.
- Use orange CTA buttons.
- Place the logo in a corner with at least 32px height.

### Website And Materials

- Use blue headings with orange accents.
- Use `#1364A240` for certificate and project borders.
- Use the same primary blue for dashboard tabs and navigation.
- Keep illustrations in brand colors.

## Developer Tokens

| Token | Value | Role |
| --- | --- | --- |
| `--primary-color` | `#1364A2` | Buttons, footer, links |
| `--secondary-color` | `#2E3C46` | Body text |
| `--back` | `#1364A240` | Page background tint |
| `--font-family` | `Tajawal` | Default Arabic font |
| `--base-font-size` | `16px` | Base font size |
| `--line-height` | `1.5` | Line height |
| `accent` | `#FF7500` | CTA and highlight color |

## Source

This Markdown guide was created from `brand-guidelines.html`.
