import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriasComponent,
    HomeComponent,
    DetalheCategoriaComponent,
    CriarCategoriaComponent
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
    FormsModule
  ],
  providers: [CategoriasServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
