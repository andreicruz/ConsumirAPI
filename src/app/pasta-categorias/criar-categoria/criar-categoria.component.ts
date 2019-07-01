import { CategoriasServicoService } from './../categorias-servico.service';
import { Categoria } from './../categoria';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.sass']
})
export class CriarCategoriaComponent implements OnInit {

  categoria: Categoria;
  form: FormGroup;

  constructor(private categoriaServico: CategoriasServicoService, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      descricao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
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

  limpar() {
    this.form.reset();
  }
}
