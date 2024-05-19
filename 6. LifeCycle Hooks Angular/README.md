# LifeCycle Hooks Angular

## Vamos criar compoenntes de Maneira Local

Pré requisitos:

- Node.JS

- Visual Studio Code

  - Angular Language Service
  - Auto Close Tag
  - Auto Rename Tage
  - Tema (opcional)
  - Icones (opcional)
  - editorConfig, Prettier, eslint

- Angular
  - npm install -g @angular/cli@14.1.2

# Angular CLI

## Seu novo brother chamado NG

Responsável por executar e criar scripts

- `ng help` | Lista todos os comando possíveis do ng
- `ng add <collection>` | adiciona bibliotecas ao seu projeto
- `ng new [nome]` | Cria um novo projeto Angular.
- `ng run <target> `
- `ng serve [project]` | Build e cria um servidor para sua aplicação.
- `ng test [project]` | Roda testes unitários.
- `ng doc <keyword>` | Abre a documentação pesquisando pela palavra-chave.
- `ng generate` | Gera e/ou modifica arquvios baseados em um schematic.

## NG NEW: Criando um projeto Angular

Para inciar o projeto que será realizado neste curso será necessário digitar o comando `ng new life-cicly`. Logo em seguida, o ng irá perguntar algumas coisas para a configuração do projeto, como por exemplo, qual formato de stylesheet será usado.

Após isso, ele irá criar todos os arquivos necessários para um projeto básico.

# Introdução do Ciclo de vida de Componente

## NG GENERATE: Criando um novo Componente

Para saber mais digite `ng generate --help`:

Para criar um componente, usamos o comando `ng g c [nome]`, assim cria ruma pasta `[nome]` e dentro desta pasta ele criar os documentos `ts`, `html`, `css` e `spec`, e além disso ele também atualiza o documento `app.module.ts` declarando o componente.

# Momentos de Ciclo de Vida

## Entendendo o OnInit

A interface `OnInit` é uma interface que inicia assim que o componente é criado.

Sintaxe:

```ts
import { Component, OnInit } from "@angular/core";
export class TitleComponent implements OnInit {
  ngOnInit(): void {
    console.log("Olá, sou iniciado assim que o componente é criado!");
  }
}
```

## Os 8 hooks de LifeCycle Hooks

1. ngOnInit()
2. ngOnChanges()
3. ngDoCheck()
4. ngOnDestroy()

para mais informações, verificar documentação.

## OnChanges

Ele é executado sempre que um valor de uma propriedade é alterado em um `Input`.

> Obs: Ele só é executado quando a alteração é realizada através do decorator `Input`.

Sintaxe:

```ts
import { Component, OnChanges, Input } from "@angular/core";
export class TitleComponent implements OnChanges {
  @Input() nome: string = "";

  ngOnChanges(): void {
    console.log("Olá, sou iniciado sempre que uma propriedade é alterada.");
  }
}
```

## DoCheck e sua ordem de execução

É executando quando uma propriedade do componente é verificada.

### >\_ ng AfterContentInit()

Executa quando Angular realiza qualquer projeção de conteúdo em seus componentes.

### >\_ ng AfterContentChecked()

Executa sempre que conteúdo do conteúdo do compoennte é verificado pelo mecanismo de detecção de alteração do Angular.

### >\_ ng AfterViewInit()

Executa depois que um componente é totalmente inciializado (carregou tudo).

### >\_ ng AfterViewChecked()

Executa quando a visualização de um componente é veririfcada pelo algoritmo de detecção de alteração do Angular.

## Subeventos do DoCheck

Para entender, basicamente a sequencia de verificação é a seguinte: Primeiro ele verifica se houve mudança, depois verifica a mudança do conteúdo, e depois verifica a mudança da view.

Exemplo:

_check-sample.component.html_

```html
<button (click)="decrementar()"><</button>
{{ quantidade }}
<button (click)="adicionar()">></button>
```

_check-sample.component.ts_

```typescript
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-check-sample",
  templateUrl: "./check-sample.component.html",
  styleUrl: "./check-sample.component.css",
})
export class CheckSampleComponent
  implements
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnInit
{
  quantidade: number = 0;

  constructor() {}

  adicionar() {
    this.quantidade += 1;
  }

  decrementar() {
    this.quantidade -= 1;
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
}
```

Com este código é possível visualizar a ordem de execução dos comandos.

## A ordem do doCheck, Content e View

Os sub eventos do doCheck `ngAfterContentInit()` e `ngAfterViewInit()` só serão executados uma vez, quando são iniciados.

Sempre quando acontece alguma alteração, o `checked` verificará o componente novamente. O `checked` sempre verifica primeiro o `conteúdo` e no final a view. Pois ele precisa preparar a os conteúdos antes de mandar isso para visualização.

// checked -> content -> view

## OnDestroy

É executado sempre que o componetent é destruído (morto :'c).

> "Pra morrer, basta estar vivo!" - prof. Felipe Agiar

Exemplo:

_check-sample.component.ts_

```ts
import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-check-sample",
  templateUrl: "./check-sample.component.html",
  styleUrl: "./check-sample.component.css",
})
export class CheckSampleComponent implements OnDestroy {
  ngOnDestroy(): void {
    console.log("Goodbye Everybody!");
  }
}
```

_app.component.html_

```html
<app-check-sample *ngIf="isAliveCheckSample"></app-check-sample>

<button (click)="disposeCheckSample()">Destruidor!!! Muahaha!</button>
```

_app.component.ts_

```ts
export class AppComponent {
  isAliveCheckSample: boolean = true;

  disposeCheckSample(): void {
    this.isAliveCheckSample = false;
  }
}
```

