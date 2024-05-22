import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { DiretivaPageComponent } from './diretiva-page/diretiva-page.component';
import { JanelasModaisComponent } from './janelas-modais/janelas-modais.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';

const routes: Routes = [
  {path: 'datapicker', component: DatapickerComponent},
  {path: 'diretivas', component: DiretivaPageComponent},
  {path: 'janelas-modais', component: JanelasModaisComponent},
  {path: 'tabela-produtos', component: TabelaProdutosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
