import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
  standalone: true,
  imports: [NgFor]
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = [];

  constructor(private serviciosService: ServiciosService) {}

  ngOnInit() {
    this.servicios = this.serviciosService.getServicios();
  }
  alerta(nombre: string) {
    alert('¡Solicita más información sobre ' + nombre + '!');
}

}
