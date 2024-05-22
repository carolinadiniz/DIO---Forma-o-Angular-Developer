import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacaoDialogComponent } from './confirmacao-dialog/confirmacao-dialog.component';

@Component({
  selector: 'app-janelas-modais',
  templateUrl: './janelas-modais.component.html',
  styleUrl: './janelas-modais.component.css',
})
export class JanelasModaisComponent {
  constructor(public dialog: MatDialog) {}

  abrirDialogo(): void {
    const dialogRef = this.dialog.open(ConfirmacaoDialogComponent, {
      data: { titulo: 'Confirmação', mensagem: 'Deseja realmente prosseguir?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('O dialogo foi fechado com o resultado: ', result);
    });
  }
}
