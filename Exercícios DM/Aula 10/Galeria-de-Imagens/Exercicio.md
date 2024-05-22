# Exercício Prático: Galeria de Imagens com Contador de Cliques

### **Objetivo:**

Utilizar o `@Output` para criar uma galeria de imagens simples, onde cada imagem emite um evento quando clicada, incrementando um contador global de cliques.

### **Funcionalidades:**

- O componente `ImagemComponent` deve exibir uma imagem e emitir um evento `@Output` chamado `cliqueNaImagem` quando a imagem for clicada.
- O componente `GaleriaComponent` deve exibir uma lista de `ImagemComponent` e um contador que exibe o número total de cliques em qualquer imagem da galeria.

### **Componentes:**

- `ImagemComponent`: Componente para exibir uma imagem individual.
- `GaleriaComponent`: Componente para exibir a galeria de imagens e o contador de cliques.

### **Passos:**

1. **Criar o componente `ImagemComponent`:**

   - Receber o URL da imagem como `@Input()`.
   - Definir um evento `@Output()` chamado `cliqueNaImagem` do tipo EventEmitter<void>.
   - Emitir o evento `cliqueNaImagem` quando a imagem for clicada.

2. **Criar o componente `GaleriaComponent`:**

   - Criar um array de URLs de imagens para popular a galeria.
   - Criar uma variável para armazenar o contador de cliques, inicializada em 0.
   - Iterar sobre o array de URLs de imagens e criar uma instância de `ImagemComponent` para cada URL, passando o URL como `@Input()`.
   - Escutar o evento `cliqueNaImagem` de cada `ImagemComponent` e incrementar o contador de cliques.
   - Exibir o contador de cliques na tela.

### **Exemplo de código:**

`imagem.component.ts:`

```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-imagem',
  template: `
    <img [src]="urlImagem" (click)="clicarNaImagem()">
  `,
  styles: []
})
export class ImagemComponent {
  @Input() urlImagem: string;
  @Output() cliqueNaImagem = new EventEmitter<void>();

  clicarNaImagem() {
    this.cliqueNaImagem.emit();
  }
}
```

`galeria.component.ts:`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  template: `
    <h2>Galeria de Imagens</h2>
    <p>Total de Cliques: {{ totalCliques }}</p>
    <div>
      <app-imagem 
        *ngFor="let url of imagens"
        [urlImagem]="url"
        (cliqueNaImagem)="incrementarCliques()"
      ></app-imagem>
    </div>
  `,
  styles: []
})
export class GaleriaComponent {
  imagens = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150/09f/fff',
    'https://via.placeholder.com/150/f9c/fff'
  ];

  totalCliques = 0;

  incrementarCliques() {
    this.totalCliques++;
  }
}
```

### **Resultados Esperados:**

Ao final do exercício, você terá uma galeria de imagens simples, onde cada clique em uma imagem incrementa um contador global. Este exercício ajudará a consolidar sua compreensão do uso de `@Output` para emitir eventos de componentes filhos para componentes pais em Angular.
