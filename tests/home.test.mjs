import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('the built homepage presents the institution and its contact details', async () => {
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  for (const value of ['Centro Militar', '21 de mayo de 1903', 'Máximo Tajes', 'Salvador Tajes', 'Osvaldo Rodríguez', 'Avenida del Libertador', 'cmrrpp@gmail.com', '29081541', '29081741', '29081482', '29081644']) {
    assert.ok(html.includes(value), `Missing ${value}`);
  }
  assert.match(html, /lang="es"/);
  assert.match(html, /href="mailto:cmrrpp@gmail\.com"/);
  for (const phone of ['2908 1541', '2908 1741', '2908 1482', '2908 1644']) {
    assert.ok(html.includes(`(+598) ${phone}`), `Missing formatted number ${phone}`);
  }
  assert.ok(!html.includes('Código internacional UY:'));
  assert.ok(html.includes('/images/escudo.jfif'));
});
