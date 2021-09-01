var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    //클래스내부에서 함수선언은 function이 필요없다
    Car.prototype.getTax = function () {
        return this.price / 10;
    };
    return Car;
}());
var c = new Car("소나타", 3000);
console.log(c);
console.log(c.getTax());
