// Tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "felipe";
let idade: number = 30;
let altura: number = 1.75;

// Tipos especiais: null e undefined
let nulo: null = null;
let indefindo: undefined = undefined;

// Tipos abrangentes: any e void
let retorno: void;
let retornoView: any = false;

// Objeto sem previsibilidade
let produto: object = {
  name: "Carolina",
  cidade: "RJ",
  idade: 25,
};

// Objeto tipado com previsibilidade
// structure
type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: "Tênis",
  preco: 89.99,
  unidades: 5,
};

// Arrays
let dados: string[] = ["felipe", "ana", "carolina"];
let dados2: Array<string> = ["felipe", "ana", "carolina"];

// Arrays multi types
let infos: (string | number)[] = ["carolina", 30, "Ana"];
let infos2: Array<string | number> = ["carolina", 30, "Ana"];

// tuplas
let boleto: [string, number, number] = ["agua conta", 199.9, 2312322];

// arrays métodos
dados.pop();
dados.filter;

// datas
let aniversario: Date = new Date("1998-12-01 05:00");
console.log(aniversario.toString());