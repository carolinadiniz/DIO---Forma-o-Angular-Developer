import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css',
})
export class ListaTarefasComponent {
  tarefas: string[] = ['tarefa 1', 'tarefa 2'];

  adicionarTarefa(titulo: string) {
    this.tarefas.push(titulo)
  }
}
