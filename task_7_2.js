function calculate(a, b, operator) {
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b !== 0) {
                return a / b;
            } else {
                return "ОШИБКА: деление на ноль!";
            }
        default: 
            return "Неизвестный оператор!";
    }
}

const obj = {
    a: 2,
    b: 3,
    operator: "+"
};

const result = calculate.apply(obj, [obj.a, obj.b, obj.operator]);
console.log(result);