import { Plugin } from "obsidian";
import tippy from "tippy.js";

export default class HoverLinkPlugin extends Plugin {
  async onload() {
    this.registerMarkdownPostProcessor((element) => {
      // We only want to add tooltips to:
      //  1. external links
      //  2. links which don't already show the href
      const targetLinks = Array.from(element.getElementsByTagName("a")).filter(
        (link) =>
          link.classList.contains("external-link") &&
          link.href !== link.innerHTML
      );

      for (const link of targetLinks) {
        tippy(link, {
          content: link.href,
        });
      }
    });
  }
}
