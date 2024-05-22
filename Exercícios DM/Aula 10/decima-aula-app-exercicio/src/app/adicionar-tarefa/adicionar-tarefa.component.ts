import { Component } from '@angular/core';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-adicionar-tarefa',
  templateUrl: './adicionar-tarefa.component.html',
  styleUrl: './adicionar-tarefa.component.css'
})
export class AdicionarTarefaComponent {
  constructor(private tarefaService: TarefasService) {}

  adicionarTarefa(titulo: string) {
    this.tarefaService.adicionarTarefa(titulo);
  }
}
