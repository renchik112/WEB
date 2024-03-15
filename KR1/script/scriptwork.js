function TriangleArea(base, height){
    return 0.5 * base * height
}
const base = 7;
const height = 3;
const area = TriangleArea(base, height);
console.log("Площа трикутника з основою 7 і висотою 3 =", area)

function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.maxTonnage = maxTonnage;
    this.brand = brand;
    this.countryOfRegistration = countryOfRegistration;
}

var myBoat = new Boat(red, 65, 7, Boab, Ukraine);
console.log("color:", myBoat color);
console.log("maxSpeed:", myBoat) maxSpeed;
console.log("maxTonnage:", myBoat maxTonnage);
console.log("brand:", myBoat brand);
console.log("countryOfRegistration:", myBoat countryOfRegistration);