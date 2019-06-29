import { Injectable } from '@angular/core';
import { Categoria } from './categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasServicoService {
  apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.apiUrl}/categorias`);
  }
}
