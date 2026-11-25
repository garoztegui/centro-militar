import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('visitors can access the four services and magazine issues', async () => {
  const html = await readFile(new URL('../dist/servicios/index.html', import.meta.url), 'utf8');
  for (const text of ['Bar y Restaurant', 'Salón de Fiestas', 'Biblioteca Social', 'El Soldado', 'cm.social1@gmail.com', 'cm.biblioteca1@gmail.com']) {
    assert.ok(html.includes(text), `Missing ${text}`);
  }
  for (let issue = 189; issue <= 210; issue++) {
    const path = `/legacy/Servicios/RevistaElSoldado/RevistaElSoldado${issue}.pdf`;
    assert.ok(html.includes(path), `Missing issue ${issue}`);
    assert.ok((await readFile(new URL(`../dist${path}`, import.meta.url))).length > 0);
  }
  const home = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.ok(home.includes('href="/servicios/"'));
});
