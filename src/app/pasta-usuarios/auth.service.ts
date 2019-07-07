import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  mostrarMenuEmitter = new EventEmitter<boolean>();

  usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    this.usuarioAutenticado = true;
    this.mostrarMenuEmitter.emit(true);
    this.router.navigateByUrl('home');
  }

  fazerLogout(){
    this.usuarioAutenticado = false;
    this.mostrarMenuEmitter.emit(false);
    this.router.navigateByUrl('');
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
