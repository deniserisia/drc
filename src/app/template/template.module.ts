import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { HeaderComponent } from './header/header.component';
import { TemplateRoutingModule } from './template-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    //HeaderComponent,
    //SubHeaderComponent,
    //FooterComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    RouterModule
  ]
})
export class TemplateModule { }
