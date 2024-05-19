// classes

/**
 * data modifiers
 * public
 * private
 * protected
 */

class Character {
  protected name?: string;
  readonly stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }

  protected attack(): void {
    console.log(`Attack with ${this.stregth} points`);
  }
}

// suclass
class Magician extends Character {
  magicPoints: number;

  constructor(name: string, stregth: number, skill: number, magicPoints: number) {
    super(name, stregth, skill);
    this.magicPoints = magicPoints
  }
}

const p1 = new Character("Ryu", 10, 98);
const p2 = new Magician('Mago', 5, 30, 99999);

console.log(p2)
