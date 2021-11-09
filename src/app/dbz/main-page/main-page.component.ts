import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Mestro Roshi',
    poder: 1000
  }

  // Inyeccion de dependencias
  constructor(){}

  //agregarNuevoPersonaje(argumento: Personaje) { // Inserta el valor en la tabla de Personajes
    //this.personajes.push(argumento);
}


