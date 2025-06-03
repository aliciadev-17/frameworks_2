import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css'],
  standalone: true,
  imports: [NgFor]
})
export class EquipoComponent {
  miembros = [
    { nombre: 'Ana López', puesto: 'CEO', foto: 'https://randomuser.me/api/portraits/women/14.jpg' },
    { nombre: 'Carlos Ruiz', puesto: 'CTO', foto: 'https://randomuser.me/api/portraits/men/4.jpg' },
    { nombre: 'Lucía Gómez', puesto: 'Marketing', foto: 'https://randomuser.me/api/portraits/women/2.jpg' }
  ];
}
