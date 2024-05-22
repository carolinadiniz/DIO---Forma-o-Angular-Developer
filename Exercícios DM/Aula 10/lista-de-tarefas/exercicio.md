Exercício Prático: Lista de Tarefas com Limite de Caracteres
Objetivo:
Criar uma lista de tarefas simples onde o usuário pode adicionar novas tarefas, mas com um limite de caracteres. Uma mensagem de aviso será exibida caso o limite seja excedido.
Funcionalidades:
O componente AdicionarTarefaComponent permitirá ao usuário digitar uma nova tarefa e possui um botão "Adicionar".
Este componente também terá um limite de caracteres para a tarefa (por exemplo: 20 caracteres) e exibirá uma mensagem de aviso caso o limite seja ultrapassado, impedindo a inclusão da tarefa.
O componente ListaTarefasComponent exibirá a lista de tarefas adicionadas.
A comunicação entre os componentes se dará através de @Input e @Output.
Componentes:
AdicionarTarefaComponent: Componente para adicionar novas tarefas, com validação de limite de caracteres.
ListaTarefasComponent: Componente para exibir a lista de tarefas.
Passos:
Criar o componente AdicionarTarefaComponent:
Criar uma propriedade para armazenar a nova tarefa digitada pelo usuário (novaTarefa: string).
Criar uma propriedade para definir o limite de caracteres (limiteCaracteres = 20).
Criar uma propriedade para controlar a exibição da mensagem de aviso (mostrarAviso: boolean).
Criar um método adicionarTarefa() que:
Verifica se a tarefa excede o limite de caracteres, definindo a propriedade mostrarAviso como true ou false de acordo com a validação.
Caso não exceda o limite, emite um evento @Output() chamado tarefaAdicionada com a nova tarefa.
Limpa o campo de input (novaTarefa = '').
Criar um template com um input ([(ngModel)]="novaTarefa"), um botão para acionar o método adicionarTarefa() e uma mensagem de aviso condicional (usando *ngIf="mostrarAviso").
Criar o componente ListaTarefasComponent:
Criar uma propriedade (listaTarefas: string[] = []) para armazenar as tarefas.
Criar um método adicionarTarefa(tarefa: string) que adiciona a nova tarefa à listaTarefas.
Incluir o componente AdicionarTarefaComponent no template.
"Escutar" o evento tarefaAdicionada do componente filho (AdicionarTarefaComponent) e chamar o método adicionarTarefa do componente pai.
Exibir a lista de tarefas em um elemento HTML apropriado (ex: <ul>).
Exemplo de código:
adicionar-tarefa.component.ts:
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-adicionar-tarefa',
  template: `
    <input type="text" [(ngModel)]="novaTarefa" placeholder="Digite a tarefa...">
    <button (click)="adicionarTarefa()">Adicionar</button>
    <p *ngIf="mostrarAviso">Limite de caracteres excedido!</p>
  `,
  styles: []
})
export class AdicionarTarefaComponent  {
  novaTarefa: string = '';
  limiteCaracteres: number = 20;
  mostrarAviso: boolean = false;

  @Output() tarefaAdicionada = new EventEmitter<string>();

  adicionarTarefa() {
    if (this.novaTarefa.length > this.limiteCaracteres) {
      this.mostrarAviso = true;
    } else {
      this.mostrarAviso = false;
      this.tarefaAdicionada.emit(this.novaTarefa);
      this.novaTarefa = '';
    }
  }
}
Use code with caution.
TypeScript
lista-tarefas.component.ts:
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  template: `
    <h2>Lista de Tarefas</h2>
    <app-adicionar-tarefa (tarefaAdicionada)="adicionarTarefa($event)"></app-adicionar-tarefa>
    <ul>
      <li *ngFor="let tarefa of listaTarefas">{{ tarefa }}</li>
    </ul>
  `,
  styles: []
})
export class ListaTarefasComponent {
  listaTarefas: string[] = [];

  adicionarTarefa(tarefa: string) {
    this.listaTarefas.push(tarefa);
  }
}
Use code with caution.
TypeScript
Resultados Esperados:
Ao final do exercício, você terá uma lista de tarefas simples, onde o usuário poderá adicionar novas tarefas, com um limite de caracteres e um aviso caso esse limite seja ultrapassado. Este exercício demonstra, de maneira mais simples, a comunicação bidirecional entre componentes usando @Input e @Output no Angular.
