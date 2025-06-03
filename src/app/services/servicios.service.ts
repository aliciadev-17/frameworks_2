import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private servicios = [
    { nombre: 'Desarrollo Web', descripcion: 'Webs modernas y rápidas para tu negocio.', icono: '💻' },
    { nombre: 'Inteligencia Artificial', descripcion: 'Soluciones de IA para empresas.', icono: '🤖' },
    { nombre: 'Marketing Digital', descripcion: 'Impulsa tu presencia en internet.', icono: '📈' }
  ];

  getServicios() {
    return this.servicios;
  }
}
