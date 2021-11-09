import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent {

  //@Input() personajes: Personaje[] = []; // Si dentro del input se agrega un string ' ' se cambia el nombre de la propiedad, deja de ser personajes

  // Metodo get para obtener la informacion del servicio
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) {

  }
}
