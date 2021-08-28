function sayName(x) {
    var saySomething = "이름이 없습니다";
    if (typeof x === "string") {
        saySomething = "안녕하세요" + x;
    }
    return saySomething;
}
console.log(sayName("홍길동"));
console.log(sayName());
function getLength(p) {
    //타입Narrowing
    if (typeof p === "number") {
        p = String(p);
    }
    console.log(p.length);
}
getLength(245);
getLength('9567');
function getMarragePercent(x) {
    var salary = x['salary'];
    if (x['house']) {
        salary += 500;
    }
    if (x['charming'] === '상') {
        salary += 100;
    }
    return salary > 600 ? "결혼가능" : "...";
}
console.log(getMarragePercent({ salary: 700, house: false, charming: '중' }));
console.log(getMarragePercent({ salary: 100, house: false, charming: '상' }));
function cleaning(params) {
    var reArr = [];
    params.forEach(function (e, i) {
        //e를 선언해주지 않아도 내부에서 알아서 사용됨
        if (typeof e === "string") {
            e = Number(e);
        }
        reArr.push(e);
    });
    return reArr;
}
console.log(cleaning([1, '2', 3]));
function checkLecture(params) {
    if (typeof params.subject === 'string') {
        return params.subject;
    }
    else if (Array.isArray(params.subject)) {
        return params.subject.slice(-1)[0];
    }
}
console.log(checkLecture({ subject: 'math' })); //이 경우 'math'를 return
console.log(checkLecture({ subject: ['science', 'art', 'korean'] })); //이 경우 'korean'을 return
var Position = { x: 1, y: 2 };
var newVar = '1';
var myInfo = { name: "yoon" };
//name="kim" //js에서는 const의 object의 값이 변경가능하지만 readOnly를 사용할 경우 변경불가해짐
//오브젝트의 속성에 ?를 사용해서 옵셔너블하게 설정가능
var objTest = {
    name: "kim",
    age: 20
};
