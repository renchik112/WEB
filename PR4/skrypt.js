function MyMathPower(b, n) {
    let r = b;
    for (let i = 1; i < n; i++) {
        r *= b;
    }
    console.log(`The ${n}th power of ${b} equals ${r}`);
    return r;
}

function MyMathPowerDefault1(b, n) {
    b = b || 4;
    n = n || 2;
    return MyMathPower(b, n);
}

function MyMathPowerDefault2(b = 4, n = 2) {
    return MyMathPower(b, n);
}

function TestAllFunctions() {
    MyMathPowerDefault1(6, 9);
    MyMathPowerDefault1(2);
    MyMathPowerDefault1(null, 1);
    MyMathPowerDefault1();
    MyMathPowerDefault2(5, 4);
    MyMathPowerDefault2(3);
    MyMathPowerDefault2(null, 3);
    MyMathPowerDefault2();
}
TestAllFunctions();