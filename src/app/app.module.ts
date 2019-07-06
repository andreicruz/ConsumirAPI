import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { CategoriasComponent } from './pasta-categorias/categorias/categorias.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasServicoService } from './pasta-categorias/categorias-servico.service';
import { HomeComponent } from './home/home.component';
import { routing } from './app-routing';
import { DetalheCategoriaComponent } from './pasta-categorias/detalhe-categoria/detalhe-categoria.component';
import { CriarCategoriaComponent } from './pasta-categorias/criar-categoria/criar-categoria.component';
import { ProdutosComponent } from './pasta-produtos/produtos/produtos.component';
import { DetalheProdutoComponent } from './pasta-produtos/detalhe-produto/detalhe-produto.component';
import { CriarProdutoComponent } from './pasta-produtos/criar-produto/criar-produto.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriasComponent,
    HomeComponent,
    DetalheCategoriaComponent,
    CriarCategoriaComponent,
    ProdutosComponent,
    DetalheProdutoComponent,
    CriarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatGridListModule,
    MatToolbarModule,
    HttpClientModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [CategoriasServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
