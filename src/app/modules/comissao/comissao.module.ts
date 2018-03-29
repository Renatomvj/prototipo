
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ComissaoComponent } from './comissao.component';
import { MenuComponent } from './menu/menu.component';
import { ComissaoExtraPlusComponent } from './comissao-extra-plus/comissao-extra-plus.component';
import { ComissaoExtraPlusAcordosComponent } from './comissao-extra-plus/comissao-extra-plus-acordos/comissao-extra-plus-acordos.component';
import { ComissaoExtraPlusCadastroAcordoComponent } from './comissao-extra-plus/comissao-extra-plus-cadastro-acordo/comissao-extra-plus-cadastro-acordo.component';
import { ComissaoExtraPlusParametroComponent } from './comissao-extra-plus/comissao-extra-plus-parametro/comissao-extra-plus-parametro.component';



import {RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [  
  {path:'acordos', component:ComissaoExtraPlusAcordosComponent},
  {path:'acordo/cadastrar', component:ComissaoExtraPlusCadastroAcordoComponent},
  {path:'parametros', component:ComissaoExtraPlusParametroComponent},
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,    
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ ComissaoComponent, MenuComponent,ComissaoExtraPlusComponent, ComissaoExtraPlusAcordosComponent, ComissaoExtraPlusCadastroAcordoComponent, ComissaoExtraPlusParametroComponent],
  exports:[
    ComissaoComponent
  ]
})
export class ComissaoModule { }
