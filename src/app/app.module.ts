import { AppRoutingModule } from './app-routing.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BuscarProcessosComponent } from './screens/buscar-processos/buscar-processos.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { MessageModule } from 'primeng/message';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabViewModule } from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import { ProcessoComponent } from './screens/processo/processo.component';
import {ButtonModule} from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { DividerModule } from "primeng/divider";
import { SplitterModule } from "primeng/splitter";



const routes = [
  {path: 'tribproc/:processo', Component: ProcessoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    BuscarProcessosComponent,
    ProcessoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TabMenuModule,
    MessageModule,
    TabViewModule,
    InputTextModule,
    FormsModule,
    MegaMenuModule,
    PanelModule,
    ReactiveFormsModule,
    InputMaskModule,
    ButtonModule,
    RouterModule,
    ToastModule,
    MessagesModule,
    DividerModule,
    SplitterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
