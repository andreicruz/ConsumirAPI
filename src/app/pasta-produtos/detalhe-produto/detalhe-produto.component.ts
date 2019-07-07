import { CategoriasServicoService } from './../../pasta-categorias/categorias-servico.service';
import { ProdutosServicoService } from './../produtos-servico.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { Categoria } from 'src/app/pasta-categorias/categoria';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.sass']
})
export class DetalheProdutoComponent implements OnInit {

  data: any;
  produto: Produto
  categoria: Categoria
  categorias: Categoria[];
  categoriaVinculada: number;
  form: FormGroup;
  nome = new FormControl('', [Validators.required, Validators.minLength(3)]);
  descricao = new FormControl('', [Validators.required, Validators.minLength(3)]);
  preco = new FormControl('', [Validators.required, Validators.minLength(1)]);

  constructor(private produtoServico: ProdutosServicoService, private categoriaServico: CategoriasServicoService, 
              private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    // lista produtos
    this.getProduto();
    //categorias existentes para editar
    this.getCategorias();
    // validacao do form
    this.form = this.fb.group({
      id: [],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      descricao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      preco: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      categoria_id: [null]
    });
  }

  getCategorias() {
    this.categoriaServico.getCategorias().subscribe(data => {
      this.categorias = data;
      console.log(this.categorias);
    })
  }

  getProduto() {
    this.route.paramMap.subscribe(params => {
      this.produtoServico.getProduto(params.get('id')).subscribe(data => {
        this.getIdCategoriaVinculada(data);
      })
    })
  }

  getIdCategoriaVinculada(data: any) {
    this.produto = data;
    this.categoriaVinculada = this.produto.categoria_id;
    this.categoriaServico.getCategoria(this.categoriaVinculada).subscribe(dados  => {
      this.getCategoriaVinculada(dados);
    });
  }

  getCategoriaVinculada(data: any){
    this.categoria = data;
   //console.log(this.categoria)
  }

  updateProduto(){
    if(this.form.valid){
      this.produtoServico.updateProduto(this.produto).subscribe(() => this.router.navigateByUrl('/produtos'));
    }
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

  limpar() {
    this.form.reset();
  }
}
