import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { PageSobreComponent } from './page-sobre/page-sobre.component';


@NgModule({
  declarations: [
    PageSobreComponent
  ],
  imports: [
    CommonModule,
    SobreRoutingModule
  ]
})
export class SobreModule { }
