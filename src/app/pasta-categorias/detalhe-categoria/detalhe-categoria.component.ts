import { ActivatedRoute } from '@angular/router';
import { CategoriasServicoService } from '../categorias-servico.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-detalhe-categoria',
  templateUrl: './detalhe-categoria.component.html',
  styleUrls: ['./detalhe-categoria.component.sass']
})
export class DetalheCategoriaComponent implements OnInit {

  categoria: any;
  form: FormGroup;
  nome = new FormControl('', [Validators.required, Validators.minLength(3)]);
  descricao = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private categoriaServico: CategoriasServicoService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoriaServico.getCategoria(params.get('id')).subscribe(categoria => {
        console.log(categoria);
        this.categoria = categoria;
      })
    })
    this.form = this.fb.group({
      id: [],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      descricao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
    });
  }

  getErrorMessageNome(){
    return this.nome.hasError('required') ? 'Mínimo 3 digitos' :
    this.nome.hasError('nome') ? 'Nome inválido' : '';
  }

  getErrorMessageDescricao(){
    return this.descricao.hasError('required') ? 'Mínimo 3 digitos' : 
    this.descricao.hasError('descricao') ? 'Descrição inválida' : '';
  }

  updateCategoria(){
    if (this.form.valid) {
      console.log('submited');
      this.categoriaServico.updateCategoria(this.form.value).subscribe(() => this.categoriaServico.backPage());
    }
  }

  limpar() {
    this.form.reset();
  }
}
