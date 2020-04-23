import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

export class AporteFiltro {
  codigo: string;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable({
  providedIn: 'root'
})
export class AporteService {

  private readonly API = `${environment.URL_API}`;

  constructor(private http: HttpClient) { }

  listar(filtro: AporteFiltro): Promise<any> {

    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    return this.http.get(`${this.API}/aportes`, {params})
      .toPromise()
      .then(response => {
        const aportes = response['content']
        const resultado = {
          aportes,
          total: response['totalElements']
        };
        return resultado;
      });
  }
}
