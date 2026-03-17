/**
 * Postbuild prerender script for SEO.
 *
 * Spins up a local static server on the dist/ folder, then uses Puppeteer
 * to visit every route and save the fully-rendered HTML. This ensures
 * crawlers see correct <title>, <meta>, JSON-LD, and page content in the
 * initial HTML — without migrating away from Vite + React SPA.
 *
 * Usage: node scripts/prerender.mjs
 * Runs automatically via: npm run build  (postbuild hook)
 */

import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const PORT = 45678;

// All routes to prerender (must match App.tsx routes minus redirects)
const routes = [
  "/",
  "/solutions",
  "/seo-geo",
  "/pricing",
  "/private-ai",
  "/private-ai/without-internet",
  "/private-ai/council",
  "/private-ai/office",
  "/infinity-crm",
  "/overtrade-op",
  "/ai-workshop",
  "/he-design",
  "/personal-ai-agent",
  "/about",
  "/security",
  "/community",
  "/resources",
  "/resources/lmtd-calculator",
  "/resources/baffle-cut-optimization",
  "/resources/business-margin-guide",
  "/resources/ai-automation-guide",
  "/resources/ai-community",
  "/resources/ai-education",
  "/resources/ai-tools-india",
  "/resources/ai-council-guide",
  "/resources/private-ai-india",
  "/resources/ai-office-setup",
  "/resources/offline-ai-guide",
  "/resources/private-ai-vs-cloud",
  "/resources/on-premise-ai-guide",
  "/privacy",
  "/terms",
];

/** Simple static file server that falls back to index.html (SPA behavior) */
function startServer() {
  const mimeTypes = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".svg": "image/svg+xml",
    ".woff2": "font/woff2",
    ".woff": "font/woff",
    ".ttf": "font/ttf",
    ".ico": "image/x-icon",
    ".xml": "application/xml",
    ".txt": "text/plain",
  };

  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST, req.url === "/" ? "index.html" : req.url);

      if (!existsSync(filePath) || !filePath.includes(".")) {
        filePath = join(DIST, "index.html");
      }

      try {
        const content = readFileSync(filePath);
        const ext = "." + filePath.split(".").pop();
        res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });

    server.listen(PORT, () => {
      console.log(`  Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log("\n🔍 Prerendering routes for SEO...\n");

  const server = await startServer();
  const browser = await puppeteer.launch({ headless: true });

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const page = await browser.newPage();

      // Block images/fonts/media to speed up rendering
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const type = req.resourceType();
        if (["image", "font", "media"].includes(type)) {
          req.abort();
        } else {
          req.continue();
        }
      });

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      // Wait for React Helmet to update the <head>
      await page.waitForFunction(() => {
        const title = document.title;
        return title && !title.includes("undefined");
      }, { timeout: 10000 });

      // Small delay to ensure all Helmet updates are flushed
      await new Promise((r) => setTimeout(r, 500));

      // Clean up duplicate meta tags: Helmet-managed tags (data-rh="true")
      // should replace the static fallbacks from index.html
      let html = await page.evaluate(() => {
        // For each Helmet-managed tag, remove the original static duplicate
        const helmetTags = document.querySelectorAll('[data-rh="true"]');
        helmetTags.forEach((tag) => {
          const name = tag.getAttribute("name");
          const property = tag.getAttribute("property");
          const rel = tag.tagName === "LINK" ? tag.getAttribute("rel") : null;

          // Find and remove the non-Helmet duplicate
          const selector = name
            ? `[name="${name}"]:not([data-rh])`
            : property
            ? `[property="${property}"]:not([data-rh])`
            : rel === "canonical"
            ? `link[rel="canonical"]:not([data-rh])`
            : null;

          if (selector) {
            const dup = document.querySelector(selector);
            if (dup) dup.remove();
          }

          // Remove data-rh attribute for cleaner output
          tag.removeAttribute("data-rh");
        });

        return document.documentElement.outerHTML;
      });

      html = "<!DOCTYPE html>" + html;

      // Determine output path
      const outputDir = route === "/"
        ? DIST
        : join(DIST, route);

      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      writeFileSync(join(outputDir, "index.html"), html, "utf-8");
      console.log(`  ✓ ${route}`);
      success++;

      await page.close();
    } catch (err) {
      console.error(`  ✗ ${route} — ${err.message}`);
      failed++;
    }
  }

  await browser.close();
  server.close();

  console.log(`\n  Prerendered: ${success}/${routes.length} routes`);
  if (failed > 0) {
    console.log(`  Failed: ${failed} routes`);
  }
  console.log("");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
