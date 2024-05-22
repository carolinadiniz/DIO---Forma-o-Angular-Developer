import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styleUrl: './adicionar-tarefa.component.css',
})
export class AdicionarTarefaComponent {
  novaTarefa: string = '';
  limiteCaracteres: number = 20;
  caracteresExcedidos: number = 0;
  mostrarAviso: boolean = false;

  @Output() AdicionarNovaTarefa = new EventEmitter<string>();

  constructor() {}

  adicionarTarefa() {
    if (this.novaTarefa.length > this.limiteCaracteres) return;
    this.AdicionarNovaTarefa.emit(this.novaTarefa);
    this.novaTarefa = '';
  }

  textoAlterado($event: any) {
    if (this.novaTarefa.length > this.limiteCaracteres) {
      this.mostrarAviso = true;
      this.caracteresExcedidos = this.limiteCaracteres - this.novaTarefa.length;
    } else {
      this.mostrarAviso = false;
    }
  }
}
