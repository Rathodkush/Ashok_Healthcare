import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Dynamically discovers all HTML files in the project (including services/ and blog/ subfolders)
 * to configure multi-page entry points for Rollup and Vite.
 */
function getHtmlEntries(dir = __dirname, entries = {}) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      if (['node_modules', '.git', 'dist', 'scratch', 'components', '.agents', '.gemini', 'test'].includes(file.name)) {
        continue;
      }
      getHtmlEntries(resolve(dir, file.name), entries);
    } else if (file.isFile() && file.name.endsWith('.html')) {
      const fullPath = resolve(dir, file.name);
      const relative = fullPath.replace(__dirname, '').replace(/^[\\/]/, '').replace(/\\/g, '/');
      const name = relative.replace(/\.html$/, '').replace(/\//g, '_');
      entries[name] = fullPath;
    }
  }
  return entries;
}

/**
 * Ensures all static directories required by client-side scripts, components,
 * and media galleries are copied to dist/ during production build.
 */
function copyStaticAssetsPlugin() {
  return {
    name: 'copy-static-assets',
    closeBundle() {
      const dirs = ['Gallery', 'images', 'Bg_Banner', 'components', 'assets'];
      for (const dirName of dirs) {
        const src = resolve(__dirname, dirName);
        const dest = resolve(__dirname, 'dist', dirName);
        if (fs.existsSync(src)) {
          fs.cpSync(src, dest, { recursive: true, force: true });
        }
      }
      // Copy single root assets if present
      for (const singleFile of ['robots.txt', 'sitemap.xml', 'favicon.svg', 'icons.svg']) {
        const src = resolve(__dirname, singleFile);
        const dest = resolve(__dirname, 'dist', singleFile);
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
        }
      }
    }
  };
}

export default defineConfig({
  root: '.',
  publicDir: false,
  plugins: [copyStaticAssetsPlugin()],
  server: {
    port: 3000,
    open: false,
    host: true, // Listen on all network addresses (0.0.0.0)
    cors: true,
  },
  preview: {
    port: 8080,
    host: true,
    cors: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlEntries(),
    },
  },
});
