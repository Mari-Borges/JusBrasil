import { BuscarProcessosComponent } from './screens/buscar-processos/buscar-processos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';



const routes: Routes = [
  {
    path: 'home',
    component: BuscarProcessosComponent,
    data: { pageTitle: 'Página Inicial' },
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }