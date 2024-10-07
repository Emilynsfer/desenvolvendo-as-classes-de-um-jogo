class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade 
        this.tipo = tipo

    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case "mago":
                ataque = "magia"
                break;

            case "guerreiro":
                ataque = "espada"
                break;
            
            case "monge":
                ataque = "artes marciais"
                break;

            case "ninja":
                ataque = "Shuriken"
                break;

            default:
                ataque = "ataque desconhecido"
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    } 
}

let hero = new heroi("Helen", 28, "guerreiro")
hero.atacar()