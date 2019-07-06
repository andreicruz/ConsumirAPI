import { CategoriasServicoService } from './../categorias-servico.service';
import { Categoria } from './../categoria';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.sass']
})
export class CriarCategoriaComponent implements OnInit {

  categoria: Categoria;
  form: FormGroup;
  nome = new FormControl('', [Validators.required, Validators.minLength(3)]);
  descricao = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private categoriaServico: CategoriasServicoService, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      descricao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  addCategoria(){
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.categoriaServico.addCategoria(this.form.value).subscribe(() => this.route.navigateByUrl('/categorias'));
      // this.categoriaServico.updateCategoria(this.categoria).subscribe(() => this.categoriaServico.backPage());
    }
   // this.categoriaServico.addCategoria(this.categoria).subscribe(categoria => this.categoria.push(categoria))
  }

  getErrorMessageNome(){
    return this.nome.hasError('required') ? 'Mínimo 3 digitos' :
    this.nome.hasError('nome') ? 'Nome inválido' : '';
  }

  getErrorMessageDescricao(){
    return this.descricao.hasError('required') ? 'Mínimo 3 digitos' : 
    this.descricao.hasError('descricao') ? 'Descrição inválida' : '';
  }

  limpar() {
    this.form.reset();
  }
}
