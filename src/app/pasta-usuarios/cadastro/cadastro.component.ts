import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CadastroService } from '../cadastro.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {
  
  error: HttpErrorResponse
  form: FormGroup;
  login = new FormControl('', [Validators.required, Validators.minLength(3)]);
  nome = new FormControl('', [Validators.required, Validators.minLength(3)]);
  sobrenome = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.minLength(3), Validators.email]);
  senha = new FormControl('', [Validators.required, Validators.minLength(3)]);
  cep = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]);
  logradouro = new FormControl('', [Validators.required, Validators.minLength(3)]);
  bairro = new FormControl('', [Validators.required, Validators.minLength(3)]);
  localidade = new FormControl('', [Validators.required, Validators.minLength(3)]);
  uf = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]);


  constructor(private cadastroServico: CadastroService, private fb: FormBuilder, private snackBar: MatSnackBar, private route: Router) { }

  ngOnInit() {
    this.validaForm();
  }

  validaForm(){
    this.form = this.fb.group({
      login: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      sobrenome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      cep: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      logradouro: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      complemento: [null],
      bairro: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      localidade: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      uf: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
    });
  }

  cadastrarUsuario(){
    if(this.form.valid){
      this.cadastroServico.addUsuario(this.form.value).subscribe(() => this.route.navigateByUrl('/login'));
    }
  }


  getErrorMessageLogin(){
    return this.login.hasError('required') ? 'Mínimo 3 digitos' :
    this.login.hasError('login') ? 'Login inválido' : '';
  }

  getErrorMessageNome(){
    return this.nome.hasError('required') ? 'Mínimo 3 digitos' :
    this.nome.hasError('nome') ? 'Nome inválido' : '';
  }

  getErrorMessageSobrenome(){
    return this.sobrenome.hasError('required') ? 'Mínimo 3 digitos' : 
    this.sobrenome.hasError('sobrenome') ? 'Sobrenome inválido' : '';
  }

  getErrorMessageEmail(){
    return this.email.hasError('required') ? 'Mínimo 3 digitos' :
    this.email.hasError('email') ? 'Email inválido' : '';
  }

  getErrorMessageSenha(){
    return this.senha.hasError('required') ? 'Mínimo 3 digitos' :
    this.senha.hasError('senha') ? 'Senha inválida' : '';
  }

  getErrorMessageCep(){
    return this.cep.hasError('required') ? 'Mínimo 3 digitos' :
    this.cep.hasError('cep') ? 'CEP inválido' : '';
  }

  getErrorMessageLogradouro(){
    return this.logradouro.hasError('required') ? 'Mínimo 3 digitos' :
    this.logradouro.hasError('logradouro') ? 'Logradouro inválido' : '';
  }

  getErrorMessageBairro(){
    return this.bairro.hasError('required') ? 'Mínimo 3 digitos' :
    this.bairro.hasError('bairro') ? 'Bairro inválido' : '';
  }

  getErrorMessageLocalidade(){
    return this.localidade.hasError('required') ? 'Mínimo 3 digitos' :
    this.localidade.hasError('localidade') ? 'Localidade inválido' : '';
  }

  getErrorMessageUf(){
    return this.uf.hasError('required') ? 'Mínimo 3 digitos' :
    this.uf.hasError('uf') ? 'Uf inválida' : '';
  }

  autoComplete(cep: string){
    if(cep != null && cep !== '' && cep.length === 8){
      this.cadastroServico.getCep(cep).subscribe(data => {
        this.form.patchValue({
          logradouro: data.logradouro,
          complemento: data.complemento,
          bairro: data.bairro,
          localidade: data.localidade,
          uf: data.uf
        })
      },
      error => {
        this.snackOpen('CEP Inválido!', 'Fechar');
      });
    }
  }

  snackOpen(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['alert-snackbar']
    });
  }

  limpar() {
    this.form.reset();
  }
}
