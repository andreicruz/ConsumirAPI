import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { CategoriasServicoService } from '../categorias-servico.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.sass']
})
export class CategoriasComponent implements OnInit {

  categorias: Array<Categoria>

  constructor(private categoriaService: CategoriasServicoService) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias(){
    this.categoriaService.getCategorias().subscribe(dados  => this.categorias = dados);
  }

}
