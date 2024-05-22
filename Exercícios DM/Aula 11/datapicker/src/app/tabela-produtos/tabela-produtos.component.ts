import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrl: './tabela-produtos.component.css'
})
export class TabelaProdutosComponent {
  colunasExibidas: string[] = ['nome', 'preco', 'categoria'];
  produtos = [
    { nome: 'Camiseta', preco: 29.90, categoria: 'Roupas' },
    { nome: 'Tênis', preco: 129.90, categoria: 'Calçados' },
    { nome: 'Celular', preco: 1499.90, categoria: 'Eletrônicos' }
  ]
}
