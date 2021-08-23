# Hover External Link Obsidian Plugin

An [Obsidian](https://obsidian.md/) plugin that adds hover URL previews to external links in your rendered Markdown.

## Demo

https://user-images.githubusercontent.com/13353733/130523291-99b6c6c3-24f4-4729-b9ba-e4df464f0e65.mp4


## Installation

### From in Obsidian

🚧 Coming Soon! 🚧

### Manually

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/jamiebrynes7/obsidian-hover-external-link/releases/latest).
2. Place them in `<vault>/.obsidian/plugins/hover-external-link/` folder (you'll need to create this).

## Usage

This plugin will add on-hover tooltips to all external links _if_ the text of the link is not the same as the URL. This only works in the preview mode.

```md
This link will have a hover tooltip: [Google](www.google.com). 

This link won't: [www.google.com](www.google.com).
```

## Customization

This plugin exposes two CSS variables that you can use to set the tooltip background and text color.

```css
.theme-light {
  --link-tooltip-background: #333;
  --link-tooltip-text: #fff;
}

.theme-dark {
  --link-tooltip-background: #ccc;
  --link-tooltip-text: #000;
}
```
