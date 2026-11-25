import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

test('home page presents the notices and their original materials', async () => {
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
  for (const value of ['Novedades para nuestros socios', 'Asamblea General 2026', 'CIERRE DEL Departamento Deportivo', 'Horarios del Departamento Deportivo 2026', 'Convenio CM - CSOE', 'Revista El Soldado Nro.210', 'Ganadores del Concurso de Ensayo Histórico', 'Servicios Médicos Bienestar', 'Cartel Estacionamiento 2025']) {
    assert.ok(html.includes(value), `Missing ${value}`);
  }
  for (const path of ['/legacy/imag/AsambleaGeneral.jpg', '/legacy/ActDeportivas/imag/HorariosActividadesCM2026.pdf', '/legacy/imag/SerMed.jpeg']) {
    assert.ok(html.includes(path), `Missing ${path}`);
  }
});
