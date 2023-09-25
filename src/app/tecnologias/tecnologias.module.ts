import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnologiasRoutingModule } from './tecnologias-routing.module';
import { PageTecnologiasComponent } from './page-tecnologias/page-tecnologias.component';


@NgModule({
  declarations: [
    PageTecnologiasComponent
  ],
  imports: [
    CommonModule,
    TecnologiasRoutingModule
  ]
})
export class TecnologiasModule { }
