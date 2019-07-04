import { ProdutosServicoService } from './../produtos-servico.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.sass']
})
export class ProdutosComponent implements OnInit {

  produtos: Array<Produto>;
  produto: Produto;

  constructor(private produtoServico: ProdutosServicoService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos( ){
    this.produtoServico.getProdutos().subscribe(dados  => this.produtos = dados);
    console.log(this.produtos);
  }


}
