import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const root = normalize(join(process.cwd(), 'dist'));
const port = Number(process.env.PORT || 4173);

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8'
};

function resolvePath(urlPath) {
  const cleanPath = decodeURIComponent((urlPath || '/').split('?')[0]);
  const relative = cleanPath === '/' ? 'index.html' : cleanPath.replace(/^\/+/, '');
  const candidate = normalize(join(root, relative));

  if (!candidate.startsWith(root)) {
    return null;
  }

  if (existsSync(candidate) && statSync(candidate).isFile()) {
    return candidate;
  }

  return join(root, 'index.html');
}

const server = createServer(async (req, res) => {
  const filePath = resolvePath(req.url || '/');

  if (!filePath) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  try {
    if (filePath.endsWith('index.html')) {
      const html = await readFile(filePath, 'utf8');
      res.writeHead(200, {
        'Cache-Control': 'no-cache',
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end(html);
      return;
    }

    const ext = extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Cache-Control': 'public, max-age=3600',
      'Content-Type': mimeTypes[ext] || 'application/octet-stream'
    });
    createReadStream(filePath).pipe(res);
  } catch {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`ZXCHARGED sales site is running at http://127.0.0.1:${port}`);
});
