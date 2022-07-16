import { environment } from './../../environments/environment';
import { IProcessos } from './../models/IProcessos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class BuscarProcessosService {

  private readonly API = `${environment.API}`



  constructor(
    private http: HttpClient,
  ) { }

  processo(processo: string){
    return this.http.get<IProcessos[]>(`${this.API}/${processo}`).subscribe(
      resultado => {
        console.log(resultado)
      },
      erro => {
        if(erro.status == 404){
          console.log('Processo não encontrado')
        }
      }
    );
  }
  list(){
    return this.http.get<IProcessos[]>(`${this.API}`).pipe()
  }
}
