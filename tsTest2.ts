function sayName(x?:string):string{
    let saySomething:string="이름이 없습니다"
    
    if(typeof x==="string"){
        saySomething="안녕하세요"+x
    }

    return saySomething 
}

console.log(sayName("홍길동"));
console.log(sayName());


function getLength(p:(string|number)):void {
    //타입Narrowing
    if(typeof p==="number"){
        p=String(p)
    }
    
    console.log(p.length)
}
getLength(245)
getLength('9567')


function getMarragePercent(x:{salary:number,house:boolean,charming:string}):string {
    let salary=x['salary']

    if(x['house']){
        salary+=500;
    }

    if (x['charming']==='상') {
        salary+=100;
    }

    return salary>600?"결혼가능":"..."
}

console.log(getMarragePercent({salary:700, house:false, charming:'중'}))
console.log(getMarragePercent({salary:100, house:false, charming:'상'}))


function cleaning(params:(string|number)[]):number[] {
    let reArr:number[]=[]

    params.forEach((e,i)=>{
        //e를 선언해주지 않아도 내부에서 알아서 사용됨
        if(typeof e ==="string"){
            e=Number(e)
        }
        reArr.push(e)
    })
    return reArr
}

console.log(cleaning([1,'2',3]))

//타입첫글자대문자
type LectureType={
    subject:string|string[]
}

function checkLecture(params:LectureType) {
    if(typeof params.subject==='string'){
        return params.subject
    }else if(Array.isArray(params.subject)){
        return params.subject.slice(-1)[0]
    }
}

console.log(checkLecture( { subject : 'math' } ))  //이 경우 'math'를 return
console.log(checkLecture( { subject : ['science', 'art', 'korean'] } )) //이 경우 'korean'을 return
//checkLecture( { hello : 'hi' } )  //이 경우 타입에러 나면 됩니다 

//타입익스텐스
//타입은 재정의가 불가함
type PositionX={x:number}
type PositionY={y:number}
const Position:PositionX&PositionY={x:1,y:2}

type A=string
type B=number
type newType=A|B
const newVar:newType='1'

type InfoType={readonly name:string}
const myInfo:InfoType={name:"yoon"}
//name="kim" //js에서는 const의 object의 값이 변경가능하지만 readOnly를 사용할 경우 변경불가해짐

//오브젝트의 속성에 ?를 사용해서 옵셔너블하게 설정가능
let objTest:{
    name:string
    age?:number //age에 ?가 붙어있어서 해당속성이 사용되지 않아도 에러가 발생하지않음
}={
    name:"kim",
    age:20
}

/**
(숙제2) 다음 조건을 만족하는 타입을 만들어봅시다. 
1. 이 타입은 object 자료형이어야합니다.
2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
*/ 
type Testtype={
    color?:'string'
    size:number,
    readonly position:number[]
}

//{ name : 'kim', phone : 123, (x)email : 'abc@naver.com' }
type IndividualType={
    name:string,
    phone:number,
    email?:string
}