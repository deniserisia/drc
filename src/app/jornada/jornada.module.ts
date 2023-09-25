import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JornadaRoutingModule } from './jornada-routing.module';
import { PageJornadaComponent } from './page-jornada/page-jornada.component';


@NgModule({
  declarations: [
    PageJornadaComponent
  ],
  imports: [
    CommonModule,
    JornadaRoutingModule
  ]
})
export class JornadaModule { }
