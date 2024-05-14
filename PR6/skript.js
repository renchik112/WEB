class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log(`Квадрат - це геометрична фігура, яка має чотири однакові сторони і чотири кути, що дорівнюють 90 градусів.
        
        Квадрат має кілька особливостей як геометрична фігура:
        Рівні сторони: Усі чотири сторони квадрата мають однакову довжину, що робить його рівностороннім.
        Прямі кути: У квадрата всі чотири кути є прямими кутами, тобто вони дорівнюють 90 градусів.
        Рівні діагоналі: Дві діагоналі квадрата є взаємно перпендикулярними і мають однакову довжину.
        Симетрія: Квадрат має чотири осі симетрії: дві горизонтальні та дві вертикальні. Він також має ось симетрії, що проходить через кожну діагональ.
        Площа: Площа квадрата обчислюється за формулою: S = a^2, де "a" - довжина сторони квадрата.
        Периметр: Периметр квадрата дорівнює чотириразовому значенню довжини його сторони: P = 4a.`);
    }

    length() {
        let result = this.a * 4;
        console.log("Сума довжин: " + result);
        return result;
    }

    square() {
        let result = this.a ** 2;
        console.log("Площа сторін: " + result);
        return result;
    }

    info() {
        console.log(`- довжини всіх 4 сторін = ${this.a};
            - величини всіх 4 кутів = 90°;
            - суму довжин сторін = ${this.length()};
            - площу ${this.square()}.`);
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log(``)
    }

    length() {
        let result = this.a * 2 + this.b * 2;
        console.log("Сума довжин: " + result);
        return result;
    }

    square() {
        let result = this.a * this.b;
        console.log("Площа сторін: " + result);
        return result;
    }

    info() {
        console.log(`Характеристика геометричної фігури (Rectangle):`);
        console.log(`- Довжина перших двох сторін: ${this.a}, і других двох: ${this.b}`);
        console.log(`- Величина всіх 4 кутів: 90 градусів`);
        console.log(`- Сума довжин сторін: ${this.length()}`);
        console.log(`- Площа: ${this.square()}`);
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    get getA() {
        return this.a;
    }

    get getAlpha() {
        return this.alpha;
    }

    get getBeta() {
        return this.beta;
    }

    set setA(a) {
        this.a = a;
    }

    set setAlpha(alpha) {
        this.alpha = alpha;
    }

    set setBeta(beta) {
        this.beta = beta;
    }

    static help() {
        console.log(`
        Ромб - це геометрична фігура, яка має чотири однакові сторони і чотири кути, у яких протилежні сторони паралельні.

        Особливості ромба як геометричної фігури включають:
        Рівність сторін: У ромба всі чотири сторони мають однакову довжину, що робить його рівностороннім.
        Кути: У ромба всі чотири кути є рівними між собою і мають значення 90 градусів.
        Діагоналі: Дві діагоналі ромба є взаємно перпендикулярними і ділять його на чотири прямокутники, кожен з яких є пів-ромбом.
        Симетрія: Ромб має осі симетрії, що проходять через середини його протилежних сторін. Ці осі симетрії ділять його на чотири рівні трикутники.
        Площа: Площа ромба обчислюється за формулою: S = a * h, де "a" - довжина будь-якої сторони, а "h" - висота, яка проведена до будь-якої сторони ромба.
`);
    }

    length() {
        let result = this.a * 4;
        console.log("Сума довжин: " + result);
        return result;
    }

    square() {
        let result = (this.a ** 2) * Math.sin(this.alpha);
        console.log("Площа сторін: " + result);
        return result;
    }

    info() {
        console.log(`Характеристика геометричної фігури (Rhombus):`);
        console.log(`- Довжина всіх 4 сторін: ${this.a}`);
        console.log(`- Величина тупих кутів: ${this.alpha}, гострих: ${this.beta}`);
        console.log(`- Сума довжин сторін: ${this.length()}`);
        console.log(`- Площа: ${this.square()}`);
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log(`Паралелограм - це чотирикутник, у якого протилежні сторони паралельні та рівні за довжиною.
        
        Особливості паралелограму як геометричної фігури включають:
        Протилежні сторони паралельні: У паралелограмі дві протилежні сторони паралельні одна одній.
        Рівність протилежних сторін: Протилежні сторони паралелограму рівні за довжиною.
        Протилежні кути рівні: У паралелограмі протилежні кути завжди рівні один одному.
        Суміжні кути доповнюють один одного: Суміжні кути паралелограму доповнюються до 180 градусів.
        Діагоналі: Діагоналі паралелограму ділять його на два рівні трикутники.
        Симетрія: Паралелограм має осі симетрії, що проходять через середини протилежних сторін.
        Площа: Площа паралелограму може бути обчислена як добуток довжини будь-якої сторони на висоту, опущену до цієї сторони.
        Периметр: Периметр паралелограму дорівнює сумі довжин усіх його сторін.`);
    }

    length() {
        let result = this.a * 2 + this.b * 2;
        console.log("Сума довжин: " + result);
        return result;
    }

    square() {
        let result = this.a * this.b * Math.sin(this.alpha);
        console.log("Площа сторін: " + result);
        return result;
    }

    info() {
        console.log(`Характеристика геометричної фігури (Parallelogram):`);
        console.log(`- Довжина перших двох сторін: ${this.a}, і других двох: ${this.b}`);
        console.log(`- Величина тупих кутів: ${this.alpha}, гострих: ${this.beta}`);
        console.log(`- Сума довжин сторін: ${this.length()}`);
        console.log(`- Площа: ${this.square()}`);
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

let square = new Square(7);
let rectangle = new Rectangle(3, 9);
let rhombus = new Rhombus(1, 35, 8);
let parallelogram = new Parallelogram(260, 54, 12, 5);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();