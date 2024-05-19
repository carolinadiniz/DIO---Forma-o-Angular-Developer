# Trabalhando com Componentes Angular

Entendendo a composição de componentes 
<br>

## O que são Componentes?

É um elemento que seja **visual**, **customizável** e **replicável**.

É o átomo da sua aplicação, ou seja, um pedaço da sua aplicação. Uma analogia seria uma peça de lego para formar algo maior.

> Geralmente é uma função JS/TS que retorna HTML, CSS e carrega eventos JavaScript junto.

### Componentes Lógicos
Geralmente não possuem HTML e CSS, e são usados para realizar alguma lógica.

### Injeção Dependências
A composição dos componentes é montada através de **Injeção  dependências**.

A **Injeção dependência** é um padrão de desenvolvimento utilizada em diversos cenários diferentes, é uma estratégia de desenvolvimento muito utilizada.

Uma injeção é feita quando algo depende de outra coisa para seu funcionamento, mas ele não produz diretamente seu conteúdo, tendo a dependência de algum agente externo.

Banner Component	--->  app-root  ----- v
Card Component		--->	app-root  ----> HTML (index.html)
Video Component		---> app-root  ------^

<br>
## Interpolação de dados
Significa enviar dados dinamicamente para o html

*nome.component.ts*

    import { Component } from '@angular/core';
    
    @Component({
    // Informações do component
    })
    export class Button {
    	buttonText: string = 'Olá Mundo'
    }

*nome.component.html*

    <div>
    	<button>{{buttonText}}</button>
    </div>
   
Apenas preciso utilizar o {{variável}} no html e já será possível acessar.

---
### Interpolação de Arrays
*Exemplo.component.ts*

    export class Exemplo {
    	listaAlunos = ["Ana", "Beto", "João"]
    }

*Exemplo.component.html*

    <p> {{ listaAlunos[1] }} </p>

Exibição:

> <p>Beto</p>

---
### Interpolação de Objetos
*Exemplo.component.ts*

    export class Exemplo {
    	alunoObject = {
	    	label: 'Aluno',
	    	name: 'Roberto',
	    	nickname: 'Beto'
    	}
    }

*Exemplo.component.html*

    <p> {{ alunoObject.name }} </p>

Exibição:

> <p>Roberto</p>
<br>

## Estilo Global Vs Escopo
Todos os componentes possuem seu próprio CSS, porém na pasta raiz `src` existe uma folha chamada `styles.css` que tem acesso global a todos os componentes.
<br>

## Fazendo seus componentes conversarem
Como fazer a troca de informações entre components parents para children.

*app.component.html*
```
export class AppComponent {
	buttonLabel: string = "Carrinho"
}
```

*app.component.html*
```
<my-button [label]="buttonLabel"  ></my-button>
<my-button label="{{ buttonLabel }}" ></my-button>
```
As duas maneiras acima são possíveis para acessar um dado do componente pai para filho.

*button.component.ts*
```
import { Component, Input } from '@angular/core';

@Component({
	selector: 'my-button'
	// ...
})
export class Button {
	@Input() label: string = '';
}
```
*button.component.html*
```
<button> {{ label }} </button>
```

Para importar essa variável criada no componente pai, é necessário utilizar a interface `input` do `@angular/core` no componente filho.
<br>
<br>
<br>

# Data binding
Data binding (ou **associação de dados**) é passar estados (dados) da sua aplicação do TypeScript para o HTML.

A documentação oficial recomenda a utilização da seguinte sintaxe: `[name]="dado"`.
<br><br>

## As 4 Maneiras possíveis de se passar valores para componentes

Passa o dado para o componente filho utilizando a notação label passando o conteúdo da string, sem  trazer o dado do componente pai.


    <my-button label="buttonLabel"></my-button>

* Interpolação

<hr>
Passa o dado do pai para o filho utilizando a notação label esperando receber uma **variável**.

    <my-button label="{{ buttonLabel }}"></my-button>

* Interpolação

<hr>
Passa o dado do pai para o filho utilizando a notação label através de uma **string** normal.

<br>

> *Esta é a maneira recomendada pela documentação.*

<br>

    <my-button [label]="buttonLabel"></my-button>

* property binding

<hr>
Passa o dado do pai para o filho utilizando a notação label através de uma maneira **literal** utilizando aspas simples `'`.

    <my-button [label]="'Fotos'"></my-button>


Exibição:
    
> Fotos

* property binding

## Tipos de binding

|Template <br>HTML|Nome <br> Sintaxe| Component <br> TS |
|--|--|--|
|<-- | INTERPOLAÇÃO <br> {{ valor }} | <-- |
|<--  | PROPERTY BINDING <br>[propriedade]="valor"| <-- |
|-->  | EVENT BINDING <br>(evento)="Handler"| --> |
|<--  | TWO WAY DATA BINDING <br>[(ngModel)]="propriedade"| --> |


## Event Binding

Documentação de eventos do HTML: [Link](https://developer.mozilla.org/en-US/docs/Web/API/Element#events)

Sintaxe:
> <tag (evento)="Handler">

Exemplo de um **event binding**:

*button.component.ts*

    export class ButtonComponent {
        getAlert() {
            alert("Hello")
        }
    }

*button.component.html*

    <button (click)="getAlert()">Click Me</button>

Saída:
> Hello

### Passar valores pelo event binding

Exemplo:

*button.component.ts*

    export class ButtonComponent {
        getAlert(id:number) {
            alert("Hello user id: " + id)
        }
    }
   
*button.component.html*

    <button (click)="getAlert(14)">Click Me</button> 

<br>

## Two Way data biding

Exemplo de two way data binding:

*entry-data.component.html*

    <input type="text" [value]="placeholder" (input)="placeholder = $any($event.target).value">
    <p>{{ placeholder }}</p>

*entry-data.component.ts*

    export class EntryDataComponent {
        placeholder: string = 'email'
    }

1. Neste exemplo, o documento TypeScript é visto como Pai e o HTML é visto como component filho, então assim é possível passar propriedades do TS para o HTML. Para fazer isso, definimos a propriedade do HTML utilizando os colchetes `[value]` e passamos como valor o nome da nossa propriedade TypeScript `[value]="placeholder"`. <p>
Assim a propriedade `value` está recendo o valor do TypeScript.</p>

2. Podemos passar o valor da propriedade `placeholder` do TypeScript para o parágrafo utilizando a interpolação, assim todo o valor que estiver na propriedade `placeholder` será atualizada e exibida no parágrafo. <p>
Fazemos isso utilizando a sintaxe `{{ propriedade }}`.</p>

3. Para o HTML se comunicar com o TypeScript precisamos utilizar um Event Binding, neste exemplo, utilizamos o event `(input)`, esse event permite realizar eventos sempre que algo é alterado no `input`. Aqui definimos que o evento será `"placeholder = $any($event.target).value"`.
<br>
* *placeholder* = $any() //  Ele diz que a propriedade placeholder receberá uma operação JavaScript dentro de `$any()`.
<br><br>
* $event.target // Ela pega as informações do elemento atual, neste caso o `input`.
<br><br>
* "placeholder = $any($event.target).value" // define apenas a propriedade `value` do elemento `input` para a propriedade `placeholder`.
<br><br><br>


## Usando diretiva ngModel

Essa diretiva é usada para facilitar as associações que utilizam o two way data binding.

Para utilizar a diretiva `ngModel` é necessário importar sua classe `FormModule` no arquivo `app.module.ts`.

Exemplo de ngModel:

*entry-data.component.html*

    <input type="text" [(ngModel)]="placepass" />
    <p>{{ placepass }}</p>

*entry-data.component.ts*

    export class EntryDataComponent {
        placepass: string = 'senha';
    }

Ele junta tanto a property binding com o event binding, facilitando a utilização do two way data biding.

<br><br>

## Style Binding

É uma associação que utiliza um  property binding para passar a propriedade de estilo através do TypeScript utilizando `[style.property]="valor"`.

Exemplo:

*entry-data.component.html*

    <p [style.color]="color">Um parágrafo</p>

*entry-data.component.ts*

    export class EntryDataComponent {
        color:string = 'red';
    }

