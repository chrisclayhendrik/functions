class Pokemon {
    constructor(name, number, type, hp) {
        this.name = name;
        this.number = number;
        this.type = type;
        this.hp = hp;
    }

    static isValidPokemonType(type) {
        return type === 'fire' || type === 'water' || type === 'earth' || type === 'electric';
    }

    static isValidPokemonHP(hp) {
        return hp > 0;
    }

    static isValidPokemonNumber(number) {
        return number > 0 && number < 898;
    }

    static isValidPokemonName(name) {
        return name.length > 0;
    }

    static isValidPokemon (name, number, type, hp) {
        return this.isValidPokemonName(name) && this.isValidPokemonNumber(number) && this.isValidPokemonType(type) && this.isValidPokemonHP(hp);
    }
}

console.log(Pokemon.isValidPokemon('Pikachu', 1, 'fire', 100));