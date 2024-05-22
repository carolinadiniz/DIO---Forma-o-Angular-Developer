import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css',
})
export class TarefaComponent {
  @Input() tarefa = {titulo: '', concluido: false};
  @Output() concluidaChange = new EventEmitter<number>();

  toggleConcluida() {
    this.concluidaChange.emit()
  }

}
