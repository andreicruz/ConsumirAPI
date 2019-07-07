import { AuthService } from './../auth.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CadastroService } from '../cadastro.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  login = new FormControl('', [Validators.required, Validators.minLength(3)]);
  senha = new FormControl('', [Validators.required, Validators.minLength(3)]);
  
  constructor(private authServico: AuthService, private cadastroServico: CadastroService, private fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.fb.group({
      login: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      senha: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  buscaUsuario(){
    this.cadastroServico.getUsuario(this.form.value).subscribe(data => {
      this.validaUsuario(data);
    },
    error => {
      this.snackOpen('Usuário não cadastrado', 'Fechar');
    });
  }

  validaUsuario(usuario: Usuario){
    if(usuario.login === this.form.controls.login.value && usuario.senha === this.form.controls.senha.value){
      this.authServico.fazerLogin(usuario);
    }else{
      this.authServico.usuarioAutenticado = false;
      this.authServico.mostrarMenuEmitter.emit(false);
      this.snackOpen('Login/senha incorreta', 'Fechar');
    }

  }

  getErrorMessageLogin(){
    return this.login.hasError('required') ? 'Mínimo 3 digitos' :
    this.login.hasError('login') ? 'Login inválido' : '';
  }

  getErrorMessageSenha(){
    return this.senha.hasError('required') ? 'Mínimo 3 digitos' :
    this.senha.hasError('senha') ? 'Senha inválida' : '';
  }

  snackOpen(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['alert-snackbar']
    });
  }

}
