import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './pasta-categorias/categorias/categorias.component';
import { CriarCategoriaComponent } from './pasta-categorias/criar-categoria/criar-categoria.component';
import { DetalheCategoriaComponent } from './pasta-categorias/detalhe-categoria/detalhe-categoria.component';
import { ProdutosComponent } from './pasta-produtos/produtos/produtos.component';
import { CriarProdutoComponent } from './pasta-produtos/criar-produto/criar-produto.component';
import { DetalheProdutoComponent } from './pasta-produtos/detalhe-produto/detalhe-produto.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './pasta-usuarios/cadastro/cadastro.component';
import { LoginComponent } from './pasta-usuarios/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'categorias', component: CategoriasComponent},
  { path: 'categorias/novo', component: CriarCategoriaComponent, canActivate: [AuthGuard]},
  { path: 'categorias/:id', component: DetalheCategoriaComponent, canActivate: [AuthGuard]},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'produtos/novo', component: CriarProdutoComponent, canActivate: [AuthGuard]},
  { path: 'produtos/:id', component: DetalheProdutoComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'cadastro', component: CadastroComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
