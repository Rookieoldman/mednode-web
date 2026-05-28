/**
 * Genera favicons PNG/ICO des de public/favicon.svg
 * Ús: node scripts/generate-favicons.mjs
 */
import { Resvg } from '@resvg/resvg-js';
import toIco from 'to-ico';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const svgPath = path.join(root, 'public/favicon.svg');
const svg = fs.readFileSync(svgPath, 'utf8');

const sizes = [
  { name: 'favicon-16.png', size: 16, tmp: true },
  { name: 'favicon-32.png', size: 32, tmp: true },
  { name: 'favicon-48.png', size: 48, tmp: false },
  { name: 'favicon-96.png', size: 96, tmp: false },
  { name: 'favicon-192.png', size: 192, tmp: false },
  { name: 'favicon-512.png', size: 512, tmp: false },
  { name: 'apple-touch-icon.png', size: 180, tmp: false },
];

const imgDir = path.join(root, 'public/img');
const tmpDir = path.join(root, 'scripts/.favicon-tmp');
fs.mkdirSync(imgDir, { recursive: true });
fs.mkdirSync(tmpDir, { recursive: true });

function renderPng(size) {
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: size } });
  return resvg.render().asPng();
}

const icoInputs = [];

for (const { name, size, tmp } of sizes) {
  const png = renderPng(size);
  const outDir = tmp ? tmpDir : imgDir;
  const outPath = path.join(outDir, name);
  fs.writeFileSync(outPath, png);
  if (tmp || size === 48) {
    icoInputs.push(outPath);
  }
  console.log(`✓ ${path.relative(root, outPath)} (${size}x${size})`);
}

// ICO multiresolució: 16, 32, 48
const icoOut = path.join(root, 'public/favicon.ico');
const icoBuffer = await toIco([renderPng(16), renderPng(32), renderPng(48)]);
fs.writeFileSync(icoOut, icoBuffer);
console.log(`✓ public/favicon.ico (16, 32, 48) — ${icoBuffer.length} bytes`);

fs.copyFileSync(svgPath, path.join(imgDir, 'favicon.svg'));
console.log('✓ public/img/favicon.svg');

fs.rmSync(tmpDir, { recursive: true, force: true });
