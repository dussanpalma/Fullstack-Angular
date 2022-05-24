import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../interfaces/client';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) {}

 //Metodo 1
 // getClientes(): Observable<Client[]> {
 //  return this.http.get<Client[]>(this.urlEndPoint);

 // Metodo 2 con map y funcion flecha
 getClientes(): Observable<Client[]> {
  return this.http.get(this.urlEndPoint).pipe(
    map( response => response as Client[] )
  );
  }

  create(cliente: Client): Observable<Client> {
    return this.http.post<Client>(this.urlEndPoint, cliente, { headers: this.httpHeaders })
  }

  getCliente(id: any): Observable<Client>{
    return this.http.get<Client>(`${this.urlEndPoint}/${id}`)
    }

   
  delete(id: number): Observable<Client>{ 

    return this.http.delete<Client>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
  }
}
