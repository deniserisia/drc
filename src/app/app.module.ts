import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { FooterComponent } from './template/footer/footer.component';
import { SubHeaderComponent } from './template/sub-header/sub-header.component';
import { HeaderComponent } from './template/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SubHeaderComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
