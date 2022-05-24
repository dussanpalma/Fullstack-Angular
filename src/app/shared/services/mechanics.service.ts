import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Mechanics } from '../interfaces/mechanics';

@Injectable({
  providedIn: 'root'
})
export class MechanicsService {

  private urlEndPoint: string = 'http://localhost:8080/api/mecanicos';

  constructor(private http: HttpClient) {}

 getMechanics(): Observable<Mechanics[]> {
  return this.http.get(this.urlEndPoint).pipe(
    map( response => response as Mechanics[] )
  );
  }
}
