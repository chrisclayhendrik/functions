class Square {
    constructor(length) {
        this.height = length
        this.width = length
    } 

    static isValidSquare(width, height) {
        return width === height;
    }

    static isAreaEqual(s1, s2) {
        const area1 = s1.height * s1.width;
        const area2 = s2.height * s2.width;
        console.log(area1 === area2);
        return area1 === area2;
    }
}

let s1 = new Square(4)
let s2 = new Square(6)

console.log(Square.isValidSquare(10, 10))
console.log(Square.isValidSquare(6, 5))
