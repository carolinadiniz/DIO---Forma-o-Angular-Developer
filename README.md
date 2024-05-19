# DIO - Formação o Angular Developer
Repositório para as aulas da Formação Angular Developer da (dio.me)[https://www.dio.me/]

## O que é este repositório
Este é um repositório para guardar os aplicativos e anotações criadas nos cursos da Formação Angular Developer.

## O que foi abordado
1. Fundamentos de Front-end Componetizados
2. TypeScript para Angular
3. Primeiros passos de front-end com Angular
4. Introdução ao Ecossistema Angular
5. Trabalhando com Componentes Angular
6. LifeCycle Hooks Angular
7. Como criar componentes reutilizáveis com os recursos do Angular

## 1. Fundamentos de Front-end Componetizados

Neste curso foi ensinado:

- O que é component
- Como criar uma `Shadow DOM`
- Como criar `PROPS`

## 2. TypeScript para Angular

Neste curso foi ensinado:

- Porque usar typescript
- A diferença do typescript para o javascript em tempo de desenvolvimento
- Utilizar o npx para traduzir e compilar o arquvio `.ts`
- Utilizar o arquvio de configuração do typescript (`tsconfig`) `npx ts --init`
- transcompilar e executar usando `"start" : "npx tsc && node build/index.js"`
- usar variáveis tipadas em typescript
- usar funções tipadas em typescript
- as semelhanças entre type e interfaces em typescript
- usar classes em typescript
- usar generics em typescript
- instalar e usar o `ts-node-dev` e configurar `"start:dev" : "ts-node-dev --respawn --transpile-only src/index.ts"`
- o que são decorators

## 3. Primeiros passos de front-end com Angular

- O que é Angular
- Pré-requisitos Angular
- AngularJS vs Angular
- Angular no Mercado de Frameworks
- Angular vs React
- Camadas de uma Web App
  - Componentes
  - Gerenciamento de Estado
  - Roteamento
  - Renderização
- Explorando a documentação do Angular

## 5. Trabalhando com Componentes Angular
- O que são Componentes
- Componentes Lógicos
- Injeção Dependências
- Interpolação de Arrays
- Interpolação de Objetos
- Estilo Global Vs Escopo
- Fazendo componentes conversarem
- O que é Data binding
- As 4 Maneiras possíveis de se passar valores para componentes
- Tipos de binding
- Event Binding
  - Passar valores pelo event binding
- Two Way data biding
- Usando diretiva ngModel
- Style Binding

## 6. LifeCycle Hooks Angular

- Angular CLI
- Introdução do Ciclo de vida de Componente
- Momentos de Ciclo de Vida
- Os 8 hooks de LifeCycle Hooks
  - Entendendo o OnInit
  - OnChanges
  - DoCheck e sua ordem de execução
    - ng AfterContentInit()
    - ng AfterContentChecked()
    - ng AfterViewInit()
    - ng AfterViewChecked()
  - Subeventos do DoCheck
  - OnDestroy
- A ordem do doCheck, Content e View

## 7. Como criar componentes reutilizáveis com os recursos do Angular

- Conceitos de Componentes
- Arquitetura de uma Aplicação Angular
- Módulos
- Services
- Componentes
- Tipos de Componentes
- Granularidade de Componentes
  - Design Atômico
    - Átomo
    - Molécula
    - Organismo
    - Templates Pages
- Como criar Componentes
- Consumindo Componentes
- Hierarquia
  - Componentes "Aninhados"
- Vantagens de Componentizar
- Casos de Uso dos Componentes
- Complementos aos Componentes
  - Directivas
  - Pipes
- Como compartilhar no mesmo projeto
    - SharedModule
  - Como Compartilhar em outros Projetos
    - Library
    - Angular Elements
