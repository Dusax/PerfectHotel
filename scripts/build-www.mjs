import { cpSync, rmSync, mkdirSync } from 'node:fs';
rmSync('www', { recursive: true, force: true });
mkdirSync('www', { recursive: true });
for (const f of ['index.html', 'privacy.html', 'manifest.webmanifest', 'sw.js', 'icon-192.png', 'icon-512.png']) cpSync(f, 'www/' + f);
console.log('www/ pronto');
