import { IProcessos } from './../../models/IProcessos';
import { Component, OnInit } from '@angular/core';
import { BuscarProcessosService } from 'src/app/service/buscar-processos.service';
import {MenuItem} from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-buscar-processos',
  templateUrl: './buscar-processos.component.html',
  styleUrls: ['./buscar-processos.component.scss']
})
export class BuscarProcessosComponent implements OnInit {
  lista!: IProcessos[];
  items!: MenuItem[];
  activeItem!: MenuItem;
 // processo!: FormGroup;
  processo!: any;


  constructor(
    private formB: FormBuilder,
    private service: BuscarProcessosService,
    private route: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit(): void {
    this.service.list();
  
    console.log(this.lista)

  }


  buscar() {
    this._router.navigate(['/:processo', this.processo])
  }
}
