import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private readonly API = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get(`${this.API}/categorias`)
      .toPromise()
      .then(response => response);
  }

}
