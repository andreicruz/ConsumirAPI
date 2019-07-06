import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriasServicoService } from '../categorias-servico.service';
import { ProdutosServicoService } from 'src/app/pasta-produtos/produtos-servico.service';
import { Produto } from 'src/app/pasta-produtos/produto';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.sass']
})
export class CategoriasComponent implements OnInit {

  categorias: Array<Categoria>;
  categoria: Categoria;
  produtos: Produto[];
  categoriaVinculada: boolean;
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'config'];

  constructor(private categoriaServico: CategoriasServicoService, 
              private produtoServico: ProdutosServicoService,
              private snackBar: MatSnackBar) {
    this.categoriaVinculada = false;
   }

  ngOnInit() {
    this.getCategorias();
    this.getProdutos();
  }
  
  getProdutos(){
    this.produtoServico.getProdutos().subscribe(data => this.produtos = data);
  }

  getCategorias(){
    this.categoriaServico.getCategorias().subscribe(dados  => this.categorias = dados);
  }

  verificaVinculo(categoria: Categoria) {
    // limpa o boolean e entao pesquisa
    this.categoriaVinculada = false;
    this.produtos.filter(data => {
      if(data.categoria_id === categoria.id){
        this.categoriaVinculada = true;
      }
    })
  }

  deleteCategoria(categoria: Categoria) {
    this.verificaVinculo(categoria)
    if(this.categoriaVinculada){
      this.snackOpen('Categoria vinculada a um produto', 'Fechar');
    }else{
      if(confirm('Deseja deletar?')){
        this.categoriaServico.deleteCategoria(categoria).subscribe();
        this.categorias = this.categorias.filter(item => item.id != categoria.id);
      }
    }
  }

  snackOpen(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['alert-snackbar']
    });
  }
}
