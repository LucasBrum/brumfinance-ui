import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Aporte } from '../../core/model';

export class AporteFiltro {
  codigo: string;
  pagina = 0;
  itensPorPagina = 50;
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
        const aportes = response['content'];
        const resultado = {
          aportes,
          total: response['totalElements']

        };

        return resultado;
      });
  }

  adicionar(aporte: Aporte): Promise<Aporte> {
    const headers = new HttpHeaders();
    headers.append('content-type', 'application/json');

    return this.http.post<Aporte>(`${this.API}/aportes`, aporte, {headers})
      .toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`${this.API}/aportes/${id}`)
      .toPromise()
      .then(() => null);
  }
}
