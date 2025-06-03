import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class ContactoComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviar() {
    alert(`¡Gracias, ${this.nombre}! Te contactaremos a ${this.email}.`);
    // Opcional: limpiar el formulario
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }
}
