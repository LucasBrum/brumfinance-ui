import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ativo } from '../core/model';

export class AtivoFiltro {
  codigo: string;
  pagina = 0;
  itensPorPagina = 100;
}

@Injectable({
  providedIn: 'root'
})
export class AtivoService {

  private readonly API = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  listar(filtro: AtivoFiltro): Promise<any> {

    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    return this.http.get(`${this.API}/ativos`, {params})
      .toPromise()
      .then(response => {
        const ativos = response['content'];
        const resultado = {
          ativos,
          total: response['totalElements']
        };
        return resultado;
      });
  }

  adicionar(ativo: Ativo): Promise<Ativo> {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    return this.http.post<Ativo>(`${this.API}/ativos`, ativo, {headers})
      .toPromise();

  }

  excluir(id: number): Promise<void> {
     return this.http.delete(`${this.API}/ativos/${id}`)
      .toPromise()
      .then(() => null);
   }

  listarAtivosSelect(): Promise<any> {
    return this.http.get(`${this.API}/ativos/listar`)
      .toPromise()
      .then(response => response);
  }
}
