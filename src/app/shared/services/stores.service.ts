import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Stores } from '../interfaces/stores';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
 
  private urlEndPoint: string = 'http://localhost:8080/api/tiendas';

  constructor(private http: HttpClient) {}

 getStores(): Observable<Stores[]> {
  return this.http.get(this.urlEndPoint).pipe(
    map( response => response as Stores[] )
  );
  }
}
