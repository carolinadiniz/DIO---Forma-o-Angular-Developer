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


