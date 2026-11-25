import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('visitors can find lodging information and reservation contacts', async () => {
  const html = await readFile(new URL('../dist/alojamientos/index.html', import.meta.url), 'utf8');
  for (const text of ['Sede Central', 'Termas del Arapey', 'Complejo de Vacaciones Salinas', '40 habitaciones', '10 cabañas', '20 habitaciones', 'xxx', 'cm.alojamientos@gmail.com', 'cm.termas@gmail.com', 'cmsalinas@gmail.com', '43767094', '43768512']) {
    assert.ok(html.includes(text), `Missing ${text}`);
  }
  assert.match(html, /href="mailto:cm\.alojamientos@gmail\.com"[^>]*>Envíenos un correo a Alojamientos/);
  assert.doesNotMatch(html, /SedeCentral\/correo\/index\.html/);
  const home = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.match(home, /href="\/alojamientos\/"/);
});
