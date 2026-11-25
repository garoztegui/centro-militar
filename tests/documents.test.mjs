import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('visitors can find and download the original forms', async () => {
  const html = await readFile(new URL('../dist/documentos/index.html', import.meta.url), 'utf8');
  assert.ok(html.includes('Ingreso Socio Militar'));
  assert.ok(html.includes('Cancelacion de Reserva de Termas del Arapey'));
  const links = [...html.matchAll(/href="(\/legacy\/AfiliacionesDocVarios\/[^" ]+\.doc)"/g)];
  assert.equal(links.length, 17);
  for (const [, href] of links) {
    const data = await readFile(new URL(`../dist${href}`, import.meta.url));
    assert.ok(data.length > 0, `Empty document: ${href}`);
  }
  const home = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.ok(home.includes('href="/documentos/"'));
});
