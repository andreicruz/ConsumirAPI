import { CategoriasServicoService } from './../../pasta-categorias/categorias-servico.service';
import { ProdutosServicoService } from './../produtos-servico.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { Categoria } from 'src/app/pasta-categorias/categoria';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.sass']
})
export class DetalheProdutoComponent implements OnInit {

  data: any;
  produto: Produto
  categoria: Categoria
  categoriaVinculada: number;

  constructor(private produtoServico: ProdutosServicoService, private categoriaServico: CategoriasServicoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProduto();

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
   console.log(this.categoria)
  }

  updateProduto(){
    this.produtoServico.updateProduto(this.produto).subscribe(() => this.router.navigateByUrl('/produtos'));
  }
}
