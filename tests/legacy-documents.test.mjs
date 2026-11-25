import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';

async function documents(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return documents(path);
    return /\.(pdf|doc|docx)$/i.test(entry.name) ? [path] : [];
  }));
  return paths.flat();
}

test('original document paths serve the same files as the preserved copies', async () => {
  const root = join(process.cwd(), 'public', 'legacy');
  const originals = await documents(root);
  assert.equal(originals.length, 48);
  for (const original of originals) {
    const originalPath = relative(root, original);
    const actual = await readFile(join(process.cwd(), 'dist', originalPath));
    assert.deepEqual(actual, await readFile(original), `Mismatch at ${originalPath}`);
  }
});
