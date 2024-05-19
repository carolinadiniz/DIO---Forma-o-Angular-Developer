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

# Palestra / Oficina / Aula

# Como criar componentes reunitilizaveis com os recursos do Angular

## >\_ Objetivos da Aula

1. Conceitos de Componentes

2. Comunicação entre componentes

3. Melhores práticas

## >\_ Requisitos Básicos

- Node.Js
- VSCode
- Ter o Angular CLI Instalado globalmente
- Clonar o repositório para exercícios práticos
- Beber água

# Conceitos de Componentes

## >\_ Arquitetura de uma Aplicação Angular

- **Módulos**: Organizam a aplicação em conjuntos funcionais, ou seja, agrupam componentes focados em uma área de negócio.<br>Ex.: Módulo de conta corrente, módulo de cartão de crédito, módulo de pagamento.

- **Services**: São classes responsáveis por fornecer valores, funções ou recursos para construção de uma aplicação, e precisam ter um **propósito bem definido**.<br>Ex.: Service para se comunicar com uma API de cartão de crédito e será responsável apenas para isso.

- **Componentes**: São os responsáveis pelas view e telas, a parte visual.

## >\_ Módulos

- Organizam a arquitetura da aplicação
- Podem ser definidos por áreas de negócio

## >\_ Services

- Fornecem valor, função ou recursos para uma aplicação
- Incentivam a Reutilização

## >\_ Componentes

- Blocos de construção
- Elementos que compõe uma tela
- Template + Lógica

## >\_ Tipos de Componentes

### Componentes Simples ("Burro" ou "preguiçoso")

Não necessitam de uma lógica para serem exibidos.
Só recebem dados simples para estilização e construção.

### Componentes Complexos ("Inteligentes")

São componentes que exigem lógica para sua construção.
Necessitam de dados mais complexos, ligação com varios serviços, etc.

Ex.: Componente que exibe o extrato bancário de um cliente. Ele precisará acessar os dados dos gastos do cliente.

## >\_ Granularidade de Componentes

### Design Atômico

#### > Átomo

São os menores elementos possíveis, por exemplo, `input`, `button`, `label` etc.

#### > Molécula

São agrupadores desses átomos, por exemplo, `campo de formulário`.

#### > Organismo

São agrupadores de moléculas, por exemplo, `formulário`.

#### > Templates Pages

É um agrupamento de organismos, por exemplo, `tela de cadastro`.

## Como criar Componentes

```cmd
ng generate c <nome-componente>
```

Todo componete deve fazer parte de um módulo

## Consumindo Componentes

Utilizando a notação do `selector` no arquivo `TypeScritpt` é possível usá-lo para chamar o componente no template do componente pai.

Exemplo:

```ts
@Component {
  selector: 'app-custom'
}
```

```html
<app-custom></app-custom>
```

## Hierarquia

### Componentes "Aninhados"

Exemplo:

```html
<component-pai>
  <div>
    <component-filho-a></component-filho-a>
  </div>
  <div>
    <component-filho-a></component-filho-a>
  </div>
</component-pai>
```

## Vantagens de Componentizar

- Organização

- Manutenção

- Reutilização

## >\_ Casos de Uso dos Componentes

- Elementos visuais (Design)

- Seções comuns de uma aplicação

- Telas

## >\_ Complementos aos Componentes

Para auxiliar na construção de componentes, o Angular disponibiliza dois recursos que são amplamente utilizados, as `directivas`e os ``.

### Directivas

As directivas conseguem manipular o comportamento visual de um componente, por exempo, podemos utilizar uma diretiva para quando clicar-mos em um botão, a cor do mesmo seja alterada.

Existem também directivas que ajudam a montar os componentes, colocando alguma lógica de visualização, como por exemplo, `ngClass`, `*ngIf` e `*ngFor`.

### Pipes

Ajudam a formatar os dados que serão exibidos nos componentes, por exemplo, queremos formatar um componente para ser exibido em letras maiúsculas, poderiamos utilizar um `pipe` que faria essa formatação no conteúdo do componente. Outros exemplos de pipes são: `currency`, `date` e `upperCase`.

# >\_ Como compartilhar no mesmo projeto

### SharedModule

Podemos reutilizar componentes em qualquer ponto da nossa aplicação. Pensando na organização desses componentes que serão compartilhados, por convenção, criamos um módulo para fazer o gerenciamento deste compartilhamento, esse módulo é conhecido como `sharedModule`.

Podemos colocar neste módulo todos os componentes comuns em toda a aplicação, como por exemplo, `menu`, `footer`, `toolbar` etc.

```ts
@NgModule({
  declarations: [SharedComponent],
  imports: [CommonModule],
  exports: [SharedComponent],
})
export class SharedModule {}
```

```ts
@NgModule({
  imports: [SharedComponent],
})
export class AppSectionAModule {}
```

```ts
@NgModule({
  imports: [SharedComponent],
})
export class AppSectionBModule {}
```

## Como Compartilhar em outros Projetos

### Library

O código fonte é empacotado e disponibilizamos em um repositório, e para consumir, basta instalar no projeto novo.
O repositório mais conhecido para angular é o repositório do NPM.

### Angular Elements

São baseados na especificação de Web Components e com essa abordagem, é possível criar componentes que poderão ser reutilizados em qualquer tecnoligia.


