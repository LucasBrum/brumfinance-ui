import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AtivoService {

  ativosUrl = 'http://localhost:8080/ativos';

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get(`${this.ativosUrl}`)
      .toPromise()
      .then(response => {
        console.log(response);
      });
  }
}
