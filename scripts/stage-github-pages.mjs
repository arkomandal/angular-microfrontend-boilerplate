import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const distRoot = 'dist';
const hostBrowser = join(distRoot, 'angular-microfrontend-boilerplate', 'browser');
const child1Browser = join(distRoot, 'child1', 'browser');
const child2Browser = join(distRoot, 'child2', 'browser');
const targetRoot = join(distRoot, 'gh-pages');

if (!existsSync(hostBrowser)) {
  console.error(`Missing host build at ${hostBrowser}. Run the host build first.`);
  process.exit(1);
}

if (!existsSync(child1Browser) || !existsSync(child2Browser)) {
  console.error('Missing one or more child builds. Run child1 and child2 builds first.');
  process.exit(1);
}

rmSync(targetRoot, { recursive: true, force: true });
mkdirSync(targetRoot, { recursive: true });

cpSync(hostBrowser, targetRoot, { recursive: true });
cpSync(child1Browser, join(targetRoot, 'child1', 'browser'), { recursive: true });
cpSync(child2Browser, join(targetRoot, 'child2', 'browser'), { recursive: true });

writeFileSync(join(targetRoot, '.nojekyll'), '', 'utf8');

console.log('Staged GitHub Pages output at dist/gh-pages.');
