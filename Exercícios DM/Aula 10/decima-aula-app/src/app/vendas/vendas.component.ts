// componente filho
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.css'
})
export class VendasComponent {
  @Input()
  nomeProduto!: string; // caixa de entrada para o nome do produto

  @Output()
  vendasRealizadas = new EventEmitter<number>();

  enviarRelatorio() {
    // lógica para calcular as vendas realizadas
    const totalVendas = 100; // exemplo
    this.vendasRealizadas.emit(totalVendas); // envia o relatório
  }
}
