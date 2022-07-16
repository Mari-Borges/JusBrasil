import { IProcessos } from './../../models/IProcessos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscarProcessosService } from 'src/app/service/buscar-processos.service';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.scss']
})
export class ProcessoComponent implements OnInit {

  processo!: string;
  lista!: IProcessos[];
  detalhe!: any;
  listas!: IProcessos;


  constructor(
    private route: ActivatedRoute,
    private service: BuscarProcessosService,

  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: any) => {
        this.processo = params['processo']
      });

      this.detalhe = this.service.processo(this.processo)
  }

}
