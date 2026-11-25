import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('visitors can access sports schedules and facility photographs', async () => {
  const html = await readFile(new URL('../dist/actividades-deportivas/index.html', import.meta.url), 'utf8');
  for (const text of ['Actividades deportivas', 'Sala de gym', 'Piscina', 'HorariosMarzoDiciembre2026.pdf', 'HorariosActividadesCM2026.pdf', 'Deportivo3.jpg', 'Deportivo4.jpg']) {
    assert.ok(html.includes(text), `Missing ${text}`);
  }
  for (const file of ['HorariosMarzoDiciembre2026.pdf', 'HorariosActividadesCM2026.pdf']) {
    assert.ok((await readFile(new URL(`../dist/legacy/ActDeportivas/imag/${file}`, import.meta.url))).length > 0);
  }
  const home = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.ok(home.includes('href="/actividades-deportivas/"'));
});
