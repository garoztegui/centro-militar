import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('visitors can consult cultural activities and source materials', async () => {
  const html = await readFile(new URL('../dist/sociocultural/index.html', import.meta.url), 'utf8');
  for (const text of ['Sociocultural', 'Dibujo y pintura', 'Ballet', 'Ensayo coral', '14:00 a 17:00', '18:10 a 18:55', '18:55 a 19:40', '17:00 a 18:30', 'ActividadesDptoSociocultural.pdf', 'FinDeCurso2024.mp4']) {
    assert.ok(html.includes(text), `Missing ${text}`);
  }
  const home = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.ok(home.includes('href="/sociocultural/"'));
});
