import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facturas } from '../interfaces/facturas';


@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  private urlEndPoint: string = 'http://localhost:8080/api/facturas';


  constructor(private http: HttpClient) {}

  getFactura(id: any): Observable<Facturas> {
    return this.http.get<Facturas>(`${this.urlEndPoint}/${id}`)
    }

}
