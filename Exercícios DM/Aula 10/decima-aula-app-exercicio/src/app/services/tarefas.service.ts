import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  private tarefas: Tarefa[] = [
    { titulo: 'tarefa1', concluido: true },
    { titulo: 'tarefa2', concluido: false },
  ];
  private tarefas$ = new BehaviorSubject<Tarefa[]>(this.tarefas);

  obterTarefas(): Observable<Tarefa[]> {
    return this.tarefas$.asObservable();
  }

  adicionarTarefa(titulo: string): void {
    this.tarefas.push({ titulo, concluido: false });
    this.tarefas$.next(this.tarefas);
  }

  marcarComoConcluida(index: number) {
    if (this.tarefas[index].concluido == true) {
      this.tarefas[index].concluido = false;
    } else {
      this.tarefas[index].concluido = true;
    }
    this.tarefas$.next(this.tarefas);
  }
}
