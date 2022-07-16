import { IProcessos } from './../../models/IProcessos';
import { Component, OnInit } from '@angular/core';
import { BuscarProcessosService } from 'src/app/service/buscar-processos.service';
import {MenuItem, MessageService} from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-buscar-processos',
  templateUrl: './buscar-processos.component.html',
  styleUrls: ['./buscar-processos.component.scss'],
  providers: [MessageService]

})
export class BuscarProcessosComponent implements OnInit {
  lista!: IProcessos[];
  items!: MenuItem[];
  activeItem!: MenuItem;
  processo!: any;


  constructor(
    private service: BuscarProcessosService,
    private _router: Router,

  ) { }
  ngOnInit(): void {
    this.service.list().subscribe(
      resultado => { this.lista = resultado
        console.log(this.lista)
      },
    );
  }
  buscar(lista: IProcessos[]) {
      this._router.navigate(['/:processo', this.processo])

  }
}
