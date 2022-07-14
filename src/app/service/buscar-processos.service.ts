import { IProcessos } from './../models/IProcessos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscarProcessosService {

   url = 'https://op.digesto.com.br/api/tribproc';


  constructor(
    private http: HttpClient
  ) { }

  list(){
    return this.http.get<IProcessos[]>(this.url + 'api_key=' + '5af8ba4c-43e3-4361-9e9c-f73458ab6a5b');
  }
}
