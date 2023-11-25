import { EOL } from 'node:os';
import { join, basename } from 'node:path';
import { readFile, writeFile } from 'node:fs/promises';
import glob from 'fast-glob';

const readmePaths = await glob('./*/README.md', { absolute: true });
let finalReadme = `# bandf-applications

A collection of applications that can be dropped into a \`bandf/apps\` directory. Use \`bulldog > create application\` to import one or the other of them.

# Available applications
`;

for(const readmePath of readmePaths) {
	const appName = basename(readmePath, '.md');
	const readme = await readFile(readmePath, 'utf8');
	finalReadme += `##${readme}`;
}

await writeFile(join(process.cwd(), 'README.md'), finalReadme);

