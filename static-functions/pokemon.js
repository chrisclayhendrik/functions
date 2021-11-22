class Pokemon {
    constructor(name, number, type, hp) {
        this.name = name;
        this.number = number;
        this.type = type;
        this.hp = hp;
    }


    static isValidPokemonType(type) {
        return type === 'fire' || type === 'water' || type === 'earth' || type === 'electric' || type === 'ghost';
    }

    static isValidPokemonHP(hp) {
        return hp > 0;
    }

    static isValidPokemonNumber(number) {
        return number > 0 && number <= 898;
    }

    static isValidPokemonName(name) {
        return typeof name === 'string' && name.length > 0;
    }

    static isValidPokemon (pokemon) {
        return Pokemon.isValidPokemonName(pokemon.name) && Pokemon.isValidPokemonNumber(pokemon.number) && Pokemon.isValidPokemonType(pokemon.type) && Pokemon.isValidPokemonHP(pokemon.hp);
    }
}

//console.log(Pokemon.isValidPokemon('Pikachu', 1, 'electric', 100));

const gengar = new Pokemon('Gengar', 94, 'ghost', 60);
console.log(Pokemon.isValidPokemon(gengar));
