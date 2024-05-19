// interfaces
// type x interface

// geralmente será mais utilizado para tipar as variáveis
// propriedade readonly, não aceita que a propriedade seja alterada após ser definida
type robot1 = {
  readonly id: number | string;
  name: string;
};

// geralmente será mais utilizada com classes
interface robot2 {
  readonly id: number | string;
  name: string;
  sayBip(): string;
}

const bot1: robot1 = {
  id: 1,
  name: "megaman",
};

const bot2: robot2 = {
  id: 1,
  name: "megaman",
  sayBip: function (): string {
    return "BIP";
  },
};

console.log(bot1);
console.log(bot2);

// recomendações usar tipagem para variáveis
// recomendações usar interfaces para classes (contratos)

class Pessoa implements robot2 {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }

  sayBip(): string {
    return "BIP";
  }
}

const p: Pessoa = new Pessoa(1, "Wall-E");
console.log(p.sayBip());
