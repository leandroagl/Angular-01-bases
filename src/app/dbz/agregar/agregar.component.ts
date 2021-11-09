import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'; // Validar siempre que se importa de angualar core
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input () nuevo: Personaje = {
    nombre:'',
    poder: 0
  }

  constructor(private dbzService: DbzService){}
  // Decorador para emitir eventos
  // Este evento se va a emitir de un componente hijo a uno Padre (mainPage)
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {    // trim() deja de contar los espacios.
      return;
    }
    this.dbzService.agregarPersonaje(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo); //  Este onNuevoPersonaje emite un evento nuevo del tipo Personaje

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
