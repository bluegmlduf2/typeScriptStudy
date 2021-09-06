var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//오브젝트의 속성을 내로잉 in사용
var nalzza = new Date();
if (nalzza instanceof Date) {
    console.log('참이에요');
}
//클래스 내로잉 instanceOf 사용
var 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log('참이에요');
}
//never타입
//1.어딘가 잘못되었다는 말임 ..
//2.에러를 throw하고있거나
//Private , Public 예제   (TypeScript에서만 사용가능함)
var User = /** @class */ (function () {
    //restParameter로 매개변수 받음
    function User() {
        var arr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arr[_i] = arguments[_i];
        }
        this.name = arr[0];
        this.pass = arr[1];
    }
    //클래스안에서 function생략가능
    User.prototype.getPass = function () {
        return this.pass;
    };
    User.prototype.setPass = function (pass) {
        this.pass = pass;
    };
    return User;
}());
var 유저1 = new User("김", "pass1");
유저1.name = '박'; //가능
//유저1.pass = '123'; //불가능
//console.log(유저1.pass) //불가능
//private을사용하기위해선 get/set메서드사용해야함
유저1.setPass("pass2");
console.log(유저1.getPass());
//protected예제
var TestProtected = /** @class */ (function () {
    function TestProtected() {
        this.a = 1;
        this.b = 2;
    }
    return TestProtected;
}());
var ChildTestProtected = /** @class */ (function (_super) {
    __extends(ChildTestProtected, _super);
    function ChildTestProtected() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildTestProtected.prototype.show = function () {
        //console.log(this.a)// private는 extends해도 안됨
        console.log(this.b); // protected는 extends 허용.. 그러나 자식인스턴스에서 사용 불가
    };
    return ChildTestProtected;
}(TestProtected));
var 자식프로텍트 = new ChildTestProtected();
//console.log(자식프로텍트.b) //protected는 자식인스턴스에서 사용불가
//static 스태틱 특징
//1.new없이 접근가능
//2.클래스의 변수를 직접 수정가능
//3.인스턴스를 console.log()등으로 찍을때 static의 변수를 숨겨준다.
var StaticUser = /** @class */ (function () {
    function StaticUser() {
        this.intro = StaticUser.skill + '전문가입니다';
    }
    StaticUser.skill = 'js';
    return StaticUser;
}());
var 찰스 = new StaticUser();
console.log(찰스); //js전문가입니다
StaticUser.skill = 'python';
var 민수 = new StaticUser();
console.log(민수); //python전문가입니다
