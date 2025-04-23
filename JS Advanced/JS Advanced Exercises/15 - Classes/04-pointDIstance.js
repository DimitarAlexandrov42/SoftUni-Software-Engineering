class Point {
    static distance = (p1, p2) => {
        let a = Math.pow(Math.abs(p2.x - p1.x), 2) // or without Math.abs 
        let b = Math.pow(Math.abs(p2.y - p1.y), 2)
        let c = a + b
        return Math.sqrt(c)
        // let distance = Math.sqrt(a**2 + b**2)

    }

    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);


console.log(Point.distance(p1, p2));
// console.log(Point.distance(p1, p2));
