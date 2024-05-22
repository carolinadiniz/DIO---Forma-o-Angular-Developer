import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { HightlighDirective } from './diretives/hightlight.directive';

import { AppComponent } from './app.component';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { DiretivaPageComponent } from './diretiva-page/diretiva-page.component';
import { HeaderComponent } from './header/header.component';
import { JanelasModaisComponent } from './janelas-modais/janelas-modais.component';
import { ConfirmacaoDialogComponent } from './janelas-modais/confirmacao-dialog/confirmacao-dialog.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';

import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    DatapickerComponent,
    DiretivaPageComponent,
    HeaderComponent,
    HightlighDirective,
    JanelasModaisComponent,
    ConfirmacaoDialogComponent,
    TabelaProdutosComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [provideAnimationsAsync(), provideNativeDateAdapter()],
  bootstrap: [AppComponent],
})
export class AppModule {}
