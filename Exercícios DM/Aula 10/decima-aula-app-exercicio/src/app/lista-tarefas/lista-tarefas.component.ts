import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css'
})
export class ListaTarefasComponent {
  tarefas$ = this.tarefaService.obterTarefas();

  constructor(private tarefaService: TarefasService) {}

  marcarConcluida(index: number) {
    this.tarefaService.marcarComoConcluida(index);
  }
}
