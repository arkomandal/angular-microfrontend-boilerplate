import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const remoteEntryPaths = [
  join('dist', 'angular-microfrontend-boilerplate', 'browser', 'remoteEntry.json'),
  join('dist', 'child1', 'browser', 'remoteEntry.json'),
  join('dist', 'child2', 'browser', 'remoteEntry.json')
];

let changedCount = 0;

for (const filePath of remoteEntryPaths) {
  if (!existsSync(filePath)) {
    continue;
  }

  const parsed = JSON.parse(readFileSync(filePath, 'utf8'));
  if (!Object.hasOwn(parsed, 'buildNotificationsEndpoint')) {
    continue;
  }

  delete parsed.buildNotificationsEndpoint;
  writeFileSync(filePath, `${JSON.stringify(parsed, null, 2)}\n`, 'utf8');
  changedCount += 1;
  console.log(`Sanitized ${filePath}`);
}

if (changedCount === 0) {
  console.log('No federation files needed sanitization.');
}
