import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from "../listado/listado.component";
import { HeroeComponent } from "./heroe.component";

@NgModule({
    declarations: [
      HeroeComponent,
      ListadoComponent
    ],
    exports: [
      ListadoComponent
    ],
    imports: [
      CommonModule      // contiene las directivas personalizadas de Angular
    ]
})

export class HeroesModule {

}
