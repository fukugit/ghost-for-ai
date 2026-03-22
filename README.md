# ghost-for-ai

Lightweight CSS components and animations designed for AI-powered interfaces.

## Install

```bash
npm install ghost-for-ai
```

Or via CDN (jsDelivr):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/ghost-for-ai/dist/ghost.min.css">
```

## Usage

Add classes directly to your HTML — no JavaScript required.

```html
<!-- Button -->
<button class="ghost-btn ghost-btn--primary">Send</button>
<button class="ghost-btn ghost-btn--primary ghost-btn--loading">Loading</button>

<!-- Badge -->
<span class="ghost-badge ghost-badge--thinking">Thinking</span>
<span class="ghost-badge ghost-badge--success ghost-badge--online">Online</span>

<!-- Skeleton loading -->
<div class="ghost-skeleton ghost-skeleton--text" style="width:80%"></div>
<div class="ghost-skeleton ghost-skeleton--avatar"></div>

<!-- Typing indicator -->
<div class="ghost-typing">
  <span class="ghost-typing__dot"></span>
  <span class="ghost-typing__dot"></span>
  <span class="ghost-typing__dot"></span>
</div>

<!-- Cursor blink -->
<p>Streaming text<span class="ghost-cursor"></span></p>

<!-- Fade in on mount -->
<div class="ghost-fade-in">...</div>

<!-- Staggered list -->
<ul class="ghost-stagger">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Components

| Component | Classes |
|-----------|---------|
| Button | `ghost-btn`, `--primary`, `--secondary`, `--ghost`, `--danger`, `--success` |
| Button sizes | `--sm`, `--lg`, `--icon` |
| Button states | `--loading`, `disabled` |
| Badge | `ghost-badge`, `--primary`, `--secondary`, `--success`, `--warning`, `--danger`, `--info` |
| AI Badges | `--thinking`, `--online`, `--offline` |
| Table | `ghost-table`, `ghost-table-wrap`, `--striped`, `--hover`, `--compact` |
| Card | `ghost-card`, `ghost-card--ai`, `__header`, `__title`, `__body`, `__footer` |
| Chat | `ghost-chat`, `ghost-chat__message--user`, `ghost-chat__message--ai`, `ghost-chat__bubble` |
| Skeleton | `ghost-skeleton`, `--text`, `--title`, `--avatar`, `--button`, `--badge`, `--card` |
| Typing | `ghost-typing`, `ghost-typing__dot` |
| Cursor | `ghost-cursor` |
| Animations | `ghost-fade-in`, `ghost-fade-out`, `ghost-slide-in-up`, `ghost-slide-in-right`, `ghost-pulse`, `ghost-stagger` |

## Theming

Override CSS custom properties to customize:

```css
:root {
  --ghost-color-primary: #your-color;
  --ghost-font-sans: 'Your Font', sans-serif;
  --ghost-radius: 0.5rem;
}
```

## Build

```bash
npm install
npm run build   # outputs dist/ghost.css and dist/ghost.min.css
npm run watch   # watch mode
```

## License

MIT
