import { IndiceBovespa } from './../../core/model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ativo } from '../../core/model';
import { TmplAstRecursiveVisitor } from '@angular/compiler';

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

  listar(): Promise<any> {

    let params = new HttpParams();

    return this.http.get(`${this.API}/ativos`, {params})
      .toPromise()
      .then(response => {
        const ativos = response;
        const resultado = {
          ativos
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

  atualizar(ativo: Ativo): Promise<Ativo> {
    return this.http.put(`${this.API}/ativos/${ativo.id}`, ativo)
      .toPromise()
      .then(response => {
        const ativo = response as Ativo;

        return ativo;
      });
  }

  buscarPorCodigo(id: number): Promise<Ativo> {
    return this.http.get(`${this.API}/ativos/${id}`)
      .toPromise()
      .then(response => {
        const ativo = response as Ativo;

        return ativo;
      });
  }

  buscaCotacaoIbovespa(): Promise<IndiceBovespa> {
    return this.http.get(`${this.API}/ativos/cotacao/ibovespa`)
      .toPromise()
      .then(response => {
        const indiceBovespa = response as IndiceBovespa;
        return indiceBovespa;
      });
  }
}
