import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ativo } from '../core/model';
import { Header } from 'primeng/api/shared';

@Injectable({
  providedIn: 'root'
})
export class AtivoService {

  private readonly API = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get(`${this.API}/ativos`)
      .toPromise()
      .then(response => response);
  }

  adicionar(ativo: Ativo): Promise<Ativo> {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    return this.http.post<Ativo>(`${this.API}/ativos`, ativo, {headers})
      .toPromise().then(response => response);
  }

   excluir(id: number): Promise<void> {
     return this.http.delete(`${this.API}/ativos/${id}`)
      .toPromise()
      .then(() => null);
   }
}
