import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test.skip('linked videos and audio are served from local files', async () => {
  const media = [
    ...['FinDeCurso2024.mp4', 'FiestadelaCerveza.mp4', 'SalonesParaFiestasyEventos.mp4', 'ExpPict.mp4', 'NochedeVinos.mp4', 'CoroCentroMilitar.mp4'].map((f) => `SocioCultural/imag/${f}`),
    ...['DerechosHumanos.mp4', '14deabril2026.mp4', 'LaHoradelCM.mp3', 'LaHoradelCM_ProgNro27.mp3'].map((f) => `NovedadesComisionDirectiva/imag/${f}`),
    'Servicios/BibliotecaSocial/imag/ConsursoLiterario.mp4',
    'Alojamientos/SedeCentral/imag/AlojamientoPermanente.mp4',
  ];
  const pages = await Promise.all(['sociocultural', 'comision-directiva', 'servicios', 'alojamientos'].map((page) => readFile(join('dist', page, 'index.html'), 'utf8')));
  for (const path of media) {
    assert.ok(pages.some((page) => page.includes(`/legacy/${path}`)), `Missing local link: ${path}`);
    assert.ok((await stat(join('dist', 'legacy', path))).size > 0, `Empty media: ${path}`);
  }
  assert.ok(pages.every((page) => !/https:\/\/www\.centromilitar\.org\.uy\/[^"\s]+\.(?:mp4|mp3)/i.test(page)));
});
