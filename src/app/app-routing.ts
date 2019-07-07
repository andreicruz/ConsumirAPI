import { LoginComponent } from './pasta-usuarios/login/login.component';
import { DetalheProdutoComponent } from './pasta-produtos/detalhe-produto/detalhe-produto.component';
import { CriarCategoriaComponent } from './pasta-categorias/criar-categoria/criar-categoria.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { CategoriasComponent } from './pasta-categorias/categorias/categorias.component';
import { ModuleWithProviders } from '@angular/core';
import { DetalheCategoriaComponent } from './pasta-categorias/detalhe-categoria/detalhe-categoria.component';
import { ProdutosComponent } from './pasta-produtos/produtos/produtos.component';
import { CriarProdutoComponent } from './pasta-produtos/criar-produto/criar-produto.component';
import { CadastroComponent } from './pasta-usuarios/cadastro/cadastro.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);