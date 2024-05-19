// decorators
function ExibirNome(target: any) {
  console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Quincas {}

/*
// decorators
function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version, __name: "carol" });
  };
}

@apiVersion("1.10")
class Api {}

const api = new Api();
//console.log(api.__version); // não é error
//console.log(api.__name); // não é error*/

// decorators
function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version, __name: "carol" });
  };
}

//Attribute decorator
function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key];

    const getter = () => _value;
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error(`Tamanho menor que ${length}`);
      } else {
        _value = value;
      }
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

class Api {
  @minLength(10)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api = new Api("que treco pequeno");
console.log(api.name)