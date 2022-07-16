import { BuscarProcessosComponent } from './screens/buscar-processos/buscar-processos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { ProcessoComponent } from './screens/processo/processo.component';



const routes: Routes = [
  {
    path: 'tribproc',
    component: BuscarProcessosComponent,
    data: { pageTitle: 'Página Inicial' },
  },
  {
    path: 'tribproc/:processo',
    component: ProcessoComponent,
    data: { pageTitle: 'Página Inicial' },
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }