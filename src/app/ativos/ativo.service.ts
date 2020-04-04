import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ativo } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AtivoService {

  ativosUrl = 'http://localhost:8080/ativos';

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get(`${this.ativosUrl}`)
      .toPromise()
      .then(response => response);

  }

  adicionar(ativo: Ativo): Promise<Ativo> {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    return this.http.post<Ativo>(this.ativosUrl, ativo, {headers})
      .toPromise().then(response => response);
  }
}
