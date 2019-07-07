import { Component, OnInit } from '@angular/core';
import { AuthService } from '../pasta-usuarios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  
  monstrarLogout: boolean = false;

  constructor(private authServico: AuthService, private route: Router) { }

  ngOnInit() {
    this.authServico.mostrarMenuEmitter.subscribe(
      mostrar => this.monstrarLogout = mostrar
    );
  }

  deslogar(){
    this.authServico.fazerLogout();
  }

}
