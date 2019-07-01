import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriasServicoService } from '../categorias-servico.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.sass']
})
export class CategoriasComponent implements OnInit {

  categorias: Array<Categoria>;
  categoria: Categoria;

  constructor(private categoriaServico: CategoriasServicoService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias(){
    this.categoriaServico.getCategorias().subscribe(dados  => this.categorias = dados);
    console.log(this.categorias);
  }

  
  deleteCategoria(categoria: Categoria) { 
    this.categoriaServico.deleteCategoria(categoria).subscribe();
    this.categorias = this.categorias.filter(item => item.id != categoria.id);
  }
}
