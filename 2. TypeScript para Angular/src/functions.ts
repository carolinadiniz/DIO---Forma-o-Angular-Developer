// funções
function addNumber(x: number, y: number): number {
  return x + y;
}

let soma: number = addNumber(4, 7);

function addToHello(name: string): string {
  return `Hello ${name}`;
}

console.log(addToHello("Carolina"));

// funções multi types
function CallToPhone(phone: number | string): number | string {
  return phone;
}

console.log(CallToPhone("21987654321"));

// funções assincronas
async function getDatabase(id: number): Promise<string> {
  return "felipe";
}
