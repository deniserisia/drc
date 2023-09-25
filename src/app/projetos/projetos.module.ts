import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { PageProjetosComponent } from './page-projetos/page-projetos.component';


@NgModule({
  declarations: [
    PageProjetosComponent
  ],
  imports: [
    CommonModule,
    ProjetosRoutingModule
  ]
})
export class ProjetosModule { }
