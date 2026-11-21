// Entry for make.fun's "Sum up 21 November's world news in one image"
// bounty (news-image-20261121): a newspaper front page for Saturday
// 21 November 2026, drawn once and held in this repository as entry.png.
// The program only copies that image to the output directory, so both
// graded runs write exactly the same bytes. Node 22, standard library only.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });

// entry.png is a JPEG (first bytes tell it apart); the bounty keeps the
// name entry.png for either format. The copy is byte for byte, so the
// output never depends on the time or the machine it runs on.
const image = readFileSync(join(here, 'entry.png'));
writeFileSync(join(outDir, 'entry.png'), image);
