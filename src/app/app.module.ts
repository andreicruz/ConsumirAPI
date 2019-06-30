import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriasComponent,
    HomeComponent,
    DetalheCategoriaComponent
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
    routing
  ],
  providers: [CategoriasServicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
