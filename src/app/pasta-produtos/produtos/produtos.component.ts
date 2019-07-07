import { AuthService } from './../../pasta-usuarios/auth.service';
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
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'preco', 'categoria_id', 'config'];

  constructor(private produtoServico: ProdutosServicoService, private authServico: AuthService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos( ){
    this.produtoServico.getProdutos().subscribe(dados  => this.produtos = dados);
    console.log(this.produtos);
  }

  deleteProduto(produto: Produto) { 
    if(this.authServico.usuarioEstaAutenticado()){
      if(confirm(`Deseja deletar o produto ${produto.nome}?`)){
        this.produtoServico.deleteProduto(produto).subscribe();
        this.produtos = this.produtos.filter(item => item.id != produto.id);
      }
    }
  }

}
