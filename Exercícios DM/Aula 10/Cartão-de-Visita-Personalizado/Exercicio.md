# Exercício Prático: Cartão de Visita Personalizado
**Objetivo:**

Utilizar o `@Input` para criar um componente reutilizável que exibe um cartão de visita com informações personalizadas.

**Funcionalidades:**

- O componente `CartaoVisitaComponent` deve receber as seguintes informações como `@Input`:
  - `nome`: Nome da pessoa.
  - `cargo`: Cargo da pessoa na empresa.
  - `empresa`: Nome da empresa.
  - `telefone`: Número de telefone.
  - `email`: Endereço de email.

**Componente:**

- `CartaoVisitaComponent`: Componente para exibir o cartão de visita.

**Passos:**

- **Criar o componente `CartaoVisitaComponent`:**
  - Definir as propriedades `nome`, `cargo`, `empresa`, `telefone` e `email` como `@Input`.
  - Criar um layout para o cartão de visita utilizando HTML e CSS. Utilize as propriedades `@Input` para exibir as informações recebidas.

- **Utilizar o `CartaoVisitaComponent` no `AppComponent`:**
  - Criar diferentes instâncias do `CartaoVisitaComponent` no `AppComponent`, passando diferentes valores para as propriedades `@Input`.
  - Observar como o cartão de visita é personalizado para cada instância.

**Exemplo de código:**

`cartao-visita.component.ts:`

```ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao-visita',
  template: `
    <div class="cartao">
      <h3>{{ nome }}</h3>
      <p>{{ cargo }}</p>
      <p>{{ empresa }}</p>
      <p>Tel: {{ telefone }}</p>
      <p>Email: {{ email }}</p>
    </div>
  `,
  styles: [`
    .cartao {
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
      width: 200px;
      margin: 10px;
    }
  `]
})
export class CartaoVisitaComponent {
  @Input() nome: string;
  @Input() cargo: string;
  @Input() empresa: string;
  @Input() telefone: string;
  @Input() email: string;
}
```

`app.component.html:`

```html
<app-cartao-visita
  nome="João Silva"
  cargo="Desenvolvedor Front-End"
  empresa="Empresa A"
  telefone="(11) 99999-9999"
  email="joao.silva@empresaa.com"
></app-cartao-visita>

<app-cartao-visita
  nome="Maria Santos"
  cargo="Designer UI/UX"
  empresa="Empresa B"
  telefone="(21) 88888-8888"
  email="maria.santos@empresab.com"
></app-cartao-visita>
```

**Resultados Esperados:**

Ao final do exercício, você terá um componente reutilizável para exibir cartões de visita personalizados, demonstrando a utilização do `@Input` para passar dados entre componentes. Este exercício ajudará a consolidar sua compreensão do uso de `@Input` para a criação de componentes flexíveis e reutilizáveis em Angular.
