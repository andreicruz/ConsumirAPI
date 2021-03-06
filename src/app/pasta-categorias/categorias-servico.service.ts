import { Injectable } from '@angular/core';
import { Categoria } from './categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CategoriasServicoService {
  apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private location: Location) { }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.apiUrl}/categorias`);
  }

  getCategoria(id){
    return this.http.get(`${this.apiUrl + '/categorias'}/${id}`) 
  }

  updateCategoria(categoria: Categoria){
    return this.http.put(`${this.apiUrl + '/categorias'}/${categoria.id}`, categoria); 
  }

  addCategoria(categoria: Categoria){
    return this.http.post(this.apiUrl + '/categorias', categoria); 
  }

  deleteCategoria(categoria: Categoria) {
    return this.http.delete(`${this.apiUrl + '/categorias'}/${categoria.id}`); 
  }

  backPage(){
    this.location.back();
  }
}
