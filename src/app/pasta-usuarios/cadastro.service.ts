import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario, Cep } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  apiUrl: string = 'http://localhost:3000'
  apiCep: string = '//viacep.com.br/ws/';

  constructor(private http: HttpClient) { }

  getCep(cep: string): Observable<Cep>{
    return this.http.get<Cep>(`${this.apiCep + cep}/json`);
  }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiUrl}/usuarios`);
  }

  getUsuario(usario: Usuario): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl + '/usuarios'}/${usario.login}`);
  }

  updateUsuario(usuario: Usuario){
    return this.http.put(`${this.apiUrl + '/usuarios'}/${usuario.id}`, usuario); 
  }

  deleteUsuario(usuario: Usuario) {
    return this.http.delete(`${this.apiUrl + '/usuarios'}/${usuario.id}`); 
  }

  addUsuario(usuario: Usuario){
    return this.http.post(this.apiUrl + '/usuarios', usuario); 
  }
}
