import { AuthService } from './pasta-usuarios/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ConsumirAPI';

  monstrarMenu: boolean = false;

  constructor(private authServico: AuthService) {

  }
  ngOnInit(): void {
    this.authServico.mostrarMenuEmitter.subscribe(
      mostrar => this.monstrarMenu = mostrar
    );
  }
}
