//리터럴타입
type LiteralTest="김"|"박"

// let firstName:LiteralTest="윤" //에러
let firstName:LiteralTest="김"

function chnakenbo(action:"가위"|"바위"|"보"):("가위"|"바위"|"보")[] {
    return ["가위","바위"]
}

//속성을 모두 readOnly로하는 방법
const allReadOnly={
    name:"김",
    age:20
} as const


//함수에 type alias사용법 .. 함수선언식이아니라 ,함수표현식을 사용해야한다
type FunctionType=(x:string)=>number; //(파라메터타입형식)=>(리턴타입형식)
let test2:FunctionType=function(x) {
    return 1
}

//함수에 type alias 예제
type CustomerInfo={
    name:string,
    age?:number,
    plusOne:(x:string)=>number,
    changeName(y:string):void
}

//함수에 타입지정 예제 1
let customerInfo:CustomerInfo={
    name : 'kim',
    age : 30,
    plusOne(x){
       return 1 
    },
    changeName:function(y) {
    }
}

//함수에 타입지정 예제 2
type CutZeroType=(x:string)=>string;
let cutZero:CutZeroType=function(x) {
    return x.replace("0","")
}

type RemoveDashType=(x:string)=>number;
let removeDash:RemoveDashType=function(x) {
    return Number(x.replace(/-/gi,""))
}

console.log(cutZero("00123"))
console.log(removeDash("010-1111-2222"))

//어려우면 먼저 JS로 작성한 후 TS로 변환해보기
//type CutZeroType=(x:string)=>string;
//type RemoveDashType=(x:string)=>number;
//콜백함수 함수1(함수2) .. 함수1안에 파라메터로 함수2를 전달
type ChangeChracterType=(x:string,y:CutZeroType,z:RemoveDashType)=>number
let changeChracter:ChangeChracterType=function(x,y,z){
    let cutZero:string=y(x)
    let removeDash:number=z(cutZero)
    return removeDash
}

console.log(changeChracter("01010-1111-2222",cutZero,removeDash))

//엘리먼트 Narrowing 
//방법 1.instanceOf사용
let aTag=document.querySelector(".aTag")
//element|null인 유니온타입이기때문에 narrowing해줘야함
if (aTag instanceof HTMLAnchorElement ) {
    aTag.href="nate.com"
}

//방법 2. ?옵셔널체이닝사용   object.method.. //object가 존재하지않으면 undefiend처리해달라
let buttonEle=document.querySelector("#button")
buttonEle?.addEventListener('click',()=>{})

//이미지변경
let imgEle=document.querySelector("#button")
if (imgEle instanceof HTMLImageElement) {
    imgEle.src="hi.jpg"
}

let aTags=document.querySelectorAll("naver")
aTags.forEach((e,i)=>{
    if (e instanceof HTMLAnchorElement) {
        e.href="nate.com"        
    }
})