globalThis['ngServerMode'] = true;
import { createRequire } from 'node:module';
globalThis['require'] ??= createRequire(import.meta.url);
import"@angular/platform-server/init";
