import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from './produto';
import { Location } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ProdutosServicoService {
  apiUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private location: Location) { }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.apiUrl}/produtos`);
  }

  getProduto(id) {
    return this.http.get(`${this.apiUrl + '/produtos'}/${id}`) 
  }

  updateProduto(produto: Produto){
    return this.http.put(`${this.apiUrl + '/produtos'}/${produto.id}`, produto); 
  }

  deleteProduto(produto: Produto) {
    return this.http.delete(`${this.apiUrl + '/produtos'}/${produto.id}`); 
  }

  backPage(){
    this.location.back();
  }
}
