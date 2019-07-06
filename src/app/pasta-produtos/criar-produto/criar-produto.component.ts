import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriasServicoService } from 'src/app/pasta-categorias/categorias-servico.service';
import { ProdutosServicoService } from '../produtos-servico.service';
import { Categoria } from 'src/app/pasta-categorias/categoria';

@Component({
  selector: 'app-criar-produto',
  templateUrl: './criar-produto.component.html',
  styleUrls: ['./criar-produto.component.sass']
})
export class CriarProdutoComponent implements OnInit {

  produto: Produto;
  categorias: Array<Categoria>;
  form: FormGroup;
  nome = new FormControl('', [Validators.required, Validators.minLength(3)]);
  descricao = new FormControl('', [Validators.required, Validators.minLength(3)]);
  preco = new FormControl('', [Validators.required, Validators.minLength(1)]);

  constructor(private produtoServico: ProdutosServicoService, private categoriaServico: CategoriasServicoService, private fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      descricao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      preco: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      categoria_id: [null]
    });
    const categoria = this.categoriaServico.getCategorias();
    categoria.subscribe(categorias => {
      this.getCategorias(categorias);
    })
  }

  getCategorias(categorias: Array<Categoria>){
    this.categorias = categorias;
    console.log(this.categorias);
  }

  getErrorMessageNome(){
    return this.nome.hasError('required') ? 'Mínimo 3 digitos' :
    this.nome.hasError('nome') ? 'Nome inválido' : '';
  }

  getErrorMessageDescricao(){
    return this.descricao.hasError('required') ? 'Mínimo 3 digitos' : 
    this.descricao.hasError('descricao') ? 'Descrição inválida' : '';
  }

  getErrorMessagePreco(){
    return this.preco.hasError('required') ? 'Mínimo 1 digito' : 
    this.preco.hasError('preco') ? 'Valor inválido' : '';
  }

  addProduto(){
    console.log(this.form.value);
    if (this.form.valid) {
      console.log('submit');
      this.produtoServico.addProduto(this.form.value).subscribe(() => this.route.navigateByUrl('/produtos'));
      // this.categoriaServico.updateCategoria(this.categoria).subscribe(() => this.categoriaServico.backPage());
    }
   // this.categoriaServico.addCategoria(this.categoria).subscribe(categoria => this.categoria.push(categoria))
  }
}
