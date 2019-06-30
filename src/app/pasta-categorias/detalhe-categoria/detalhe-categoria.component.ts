import { ActivatedRoute } from '@angular/router';
import { CategoriasServicoService } from '../categorias-servico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-categoria',
  templateUrl: './detalhe-categoria.component.html',
  styleUrls: ['./detalhe-categoria.component.sass']
})
export class DetalheCategoriaComponent implements OnInit {

  categoria: any;

  constructor(private categoriaServico: CategoriasServicoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoriaServico.getCategoria(params.get('id')).subscribe(categoria => {
        console.log(categoria);
        this.categoria = categoria;
      })
    })
  }

  updateCategoria(){
    this.categoriaServico.updateCategoria(this.categoria).subscribe(() => this.categoriaServico.backPage());
  }
}
