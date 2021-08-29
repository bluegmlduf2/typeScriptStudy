// let firstName:LiteralTest="윤" //에러
var firstName = "김";
function chnakenbo(action) {
    return ["가위", "바위"];
}
//속성을 모두 readOnly로하는 방법
var allReadOnly = {
    name: "김",
    age: 20
};
var test2 = function (x) {
    return 1;
};
//함수에 타입지정 예제 1
var customerInfo = {
    name: 'kim',
    age: 30,
    plusOne: function (x) {
        return 1;
    },
    changeName: function (y) {
    }
};
var cutZero = function (x) {
    return x.replace("0", "");
};
var removeDash = function (x) {
    return Number(x.replace(/-/gi, ""));
};
console.log(cutZero("00123"));
console.log(removeDash("010-1111-2222"));
var changeChracter = function (x, y, z) {
    var cutZero = y(x);
    var removeDash = z(cutZero);
    return removeDash;
};
console.log(changeChracter("01010-1111-2222", cutZero, removeDash));
//엘리먼트 Narrowing 
//방법 1.instanceOf사용
var aTag = document.querySelector(".aTag");
//element|null인 유니온타입이기때문에 narrowing해줘야함
if (aTag instanceof HTMLAnchorElement) {
    aTag.href = "nate.com";
}
//방법 2. ?옵셔널체이닝사용   object.method.. //object가 존재하지않으면 undefiend처리해달라
var buttonEle = document.querySelector("#button");
buttonEle === null || buttonEle === void 0 ? void 0 : buttonEle.addEventListener('click', function () { });
//이미지변경
var imgEle = document.querySelector("#button");
if (imgEle instanceof HTMLImageElement) {
    imgEle.src = "hi.jpg";
}
var aTags = document.querySelectorAll("naver");
aTags.forEach(function (e, i) {
    if (e instanceof HTMLAnchorElement) {
        e.href = "nate.com";
    }
});
