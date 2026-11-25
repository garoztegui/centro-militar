import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('visitors can access board documents and communications', async () => {
  const html = await readFile(new URL('../dist/comision-directiva/index.html', import.meta.url), 'utf8');
  for (const name of ['Estatuto.pdf', 'ReglamentoGralyElectoral2013.pdf', 'ActadelaAsambleGeneral178-2023.pdf', 'LaHoradelCM.mp3', 'LaHoradelCM_ProgNro27.mp3', 'DerechosHumanos.mp4', '14deabril2026.mp4', 'AsambleaGeneral.jpg']) {
    assert.ok(html.includes(name), `Missing ${name}`);
  }
  const home = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  assert.ok(home.includes('href="/comision-directiva/"'));
});
