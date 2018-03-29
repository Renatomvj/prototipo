import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {RouterModule, Routes } from '@angular/router';
import { CadastroVopComponent } from './cadastro-vop/cadastro-vop.component';
import { AcordosVopComponent } from './acordos-vop/acordos-vop.component';
import { ParametrosComponent } from './parametros/parametros.component'; 
import { HomeComponent } from './home/home.component';
import { ComissaoModule } from './modules/comissao/comissao.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroVopComponent,
    AcordosVopComponent,
    ParametrosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ComissaoModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
