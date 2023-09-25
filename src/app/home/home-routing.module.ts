import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInicioComponent } from './page-inicio/page-inicio.component';

const routes: Routes = [
  {path:'home', component: PageInicioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
