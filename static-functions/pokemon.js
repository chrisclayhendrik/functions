class Pokemon {
    constructor(name, number, type, hp) {
        this.name = name;
        this.number = number;
        this.type = type;
        this.hp = hp;
    }

    static isValidPokemon(name, number, type, hp) {
        return name && number && type && hp;
    }

    static isValidPokemonType(type) {
        return type === 'fire' || type === 'water' || type === 'grass';
    }


}