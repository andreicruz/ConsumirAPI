import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { CategoriasComponent } from './categorias/categorias.component';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: 'categorias', component: CategoriasComponent},
    { path: '', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);