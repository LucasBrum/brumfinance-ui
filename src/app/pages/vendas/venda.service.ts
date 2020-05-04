import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venda } from '../../core/model';
import { environment } from 'src/environments/environment';

export class VendaFiltro {
  codigo: string;
  pagina = 0;
  itensPorPagina = 20;
}

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  private readonly API = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  adicionar(venda: Venda): Promise<Venda> {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    return this.http.post<Venda>(`${this.API}/vendas`, venda, {headers})
      .toPromise();
  }

  listar(filtro: VendaFiltro): Promise<any> {

    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    return this.http.get(`${this.API}/vendas`, {params})
      .toPromise()
      .then(response => {
        const vendas = response['content'];
        const resultado = {
          vendas,
          total: response['totalElements']
        };
        return resultado;
      });
}

}
