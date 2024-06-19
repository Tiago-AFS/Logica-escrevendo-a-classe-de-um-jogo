class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque";
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

const mago = new Heroi("Merlin", 300, "mago");
const guerreiro = new Heroi("Lancelotte", 25, "guerreiro");
const monge = new Heroi("Juruba", 50, "monge");
const ninja = new Heroi("Tiko Tiko", 35, "ninja");

mago.atacar(); // Exibe: O mago Merlin atacou usando magia
guerreiro.atacar(); // Exibe: O guerreiro Lancelotte atacou usando espada
monge.atacar(); // Exibe: O monge Juruba atacou usando artes marciais
ninja.atacar(); // Exibe: O ninja Tiko Tiko atacou usando shuriken