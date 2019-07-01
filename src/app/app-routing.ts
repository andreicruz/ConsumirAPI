import { CriarCategoriaComponent } from './pasta-categorias/criar-categoria/criar-categoria.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { CategoriasComponent } from './pasta-categorias/categorias/categorias.component';
import { ModuleWithProviders } from '@angular/core';
import { DetalheCategoriaComponent } from './pasta-categorias/detalhe-categoria/detalhe-categoria.component';

const APP_ROUTES: Routes = [
    { path: 'categorias', component: CategoriasComponent},
    { path: 'categorias/novo', component: CriarCategoriaComponent},
    { path: 'categorias/:id', component: DetalheCategoriaComponent},
    { path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);