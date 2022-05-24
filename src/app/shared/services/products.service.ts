import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Products } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlEndPoint: string = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient) {}

 getProducts(): Observable<Products[]> {
  return this.http.get(this.urlEndPoint).pipe(
    map( response => response as Products[] )
  );
  }
}
