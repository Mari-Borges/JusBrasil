import { Component, OnInit } from '@angular/core';
import { BuscarProcessosService } from 'src/app/service/buscar-processos.service';
import {MenuItem} from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscar-processos',
  templateUrl: './buscar-processos.component.html',
  styleUrls: ['./buscar-processos.component.scss']
})
export class BuscarProcessosComponent implements OnInit {
  lista: any;
  items!: MenuItem[];
  activeItem!: MenuItem;
 // processo!: FormGroup;


  constructor(
    private formB: FormBuilder,
    private service: BuscarProcessosService
  ) { }

  ngOnInit(): void {

  }

}
