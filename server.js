/**
 * ASHOK HOME HEALTHCARE SERVICES - CROSS-PLATFORM STATIC SERVER
 * Zero external dependencies. Works on Windows, macOS, and Linux out-of-the-box.
 * Supports:
 * - HTML5 multi-page navigation
 * - HTTP Range Requests for smooth MP4 video playback across all browsers
 * - Accurate MIME types
 * - Automatic port fallback if specified port is in use
 * - 404 page routing
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read port from environment or fallback
const DEFAULT_PORT = parseInt(process.env.PORT || '8080', 10);
const HOST = process.env.HOST || '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf'
};

function serveFile(req, res, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      // 404 Not Found
      const notFoundPage = path.join(__dirname, '404.html');
      fs.readFile(notFoundPage, (nfErr, nfData) => {
        if (!nfErr) {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(nfData);
        } else {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
        }
      });
      return;
    }

    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
      return serveFile(req, res, filePath);
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const totalSize = stats.size;

    // HTTP Range request handling (essential for video seek & Safari playback)
    const range = req.headers.range;
    if (range && (ext === '.mp4' || ext === '.webm' || ext === '.mov')) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;
      const chunkSize = (end - start) + 1;

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*'
      });

      const stream = fs.createReadStream(filePath, { start, end });
      stream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': totalSize,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
      });

      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    }
  });
}

function createServer(port) {
  const server = http.createServer((req, res) => {
    // Parse URL safely
    const reqUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    let decodedPathname;
    try {
      decodedPathname = decodeURIComponent(reqUrl.pathname);
    } catch {
      decodedPathname = reqUrl.pathname;
    }

    // Default root to index.html
    if (decodedPathname === '/' || decodedPathname === '') {
      decodedPathname = '/index.html';
    }

    const safePath = path.normalize(path.join(__dirname, decodedPathname));

    // Security: Prevent path traversal attacks
    if (!safePath.startsWith(__dirname)) {
      res.writeHead(403, { 'Content-Type': 'text/plain' });
      res.end('403 Forbidden');
      return;
    }

    serveFile(req, res, safePath);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`[WARN] Port ${port} is already in use. Trying port ${port + 1}...`);
      createServer(port + 1);
    } else {
      console.error(`[ERROR] Server error:`, err);
    }
  });

  server.listen(port, HOST, () => {
    console.log(`\n======================================================`);
    console.log(` ASHOK HOME HEALTHCARE SERVICES - LOCAL SERVER`);
    console.log(`======================================================`);
    console.log(` > Local:    http://localhost:${port}/`);
    console.log(` > Gallery:  http://localhost:${port}/gallery.html`);
    console.log(` > About:    http://localhost:${port}/about.html`);
    console.log(` > Services: http://localhost:${port}/services.html`);
    console.log(` > Products: http://localhost:${port}/products.html`);
    console.log(` > Careers:  http://localhost:${port}/careers.html`);
    console.log(` > Blog:     http://localhost:${port}/blog.html`);
    console.log(` > Contact:  http://localhost:${port}/contact.html`);
    console.log(`------------------------------------------------------`);
    console.log(` Press Ctrl+C to stop the server.\n`);
  });
}

createServer(DEFAULT_PORT);
