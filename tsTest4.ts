class Car {
    model:string
    price:number
    constructor(model:string,price:number) {
        this.model=model
        this.price=price
    }
    //클래스내부에서 함수선언은 function이 필요없다
    getTax():number {
        return this.price/10
    }
}

let c=new Car("소나타",3000)

console.log(c)
console.log(c.getTax())

//오브젝트의 속성을 내로잉 in사용
let nalzza = new Date();
if (nalzza instanceof Date){
  console.log('참이에요')
}

//클래스 내로잉 instanceOf 사용
let 날짜 = new Date();
if (날짜 instanceof Date){
  console.log('참이에요')
}

//never타입
//1.어딘가 잘못되었다는 말임 ..
//2.에러를 throw하고있거나


//Private , Public 예제   (TypeScript에서만 사용가능함)
class User {
    public name: string; //기본적으로 public은 생략되어있음
    private pass:number; //클래스 외부에서 수정 불가능한 값을 넣고싶을때 (클래스내부에서만사용)
    //restParameter로 매개변수 받음
    constructor(...arr){
      this.name = arr[0];
      this.pass = arr[1];
    }
    //클래스안에서 function생략가능
    getPass(){
        return this.pass;
    }
    setPass(pass){
        this.pass=pass
    }
  }
  
  let 유저1 = new User("김","pass1");
  유저1.name = '박'; //가능
  //유저1.pass = '123'; //불가능
  //console.log(유저1.pass) //불가능
  //private을사용하기위해선 get/set메서드사용해야함
  유저1.setPass("pass2")
  console.log(유저1.getPass())

  //protected예제
  class TestProtected{
    private a:number=1
    protected b:number=2
  }

  class ChildTestProtected extends TestProtected{
      show(){
          //console.log(this.a)// private는 extends해도 안됨
          console.log(this.b)// protected는 extends 허용.. 그러나 자식인스턴스에서 사용 불가
      }
  }

  let 자식프로텍트=new ChildTestProtected()
  //console.log(자식프로텍트.b) //protected는 자식인스턴스에서 사용불가

  //static 스태틱 특징
  //1.new없이 접근가능
  //2.클래스의 변수를 직접 수정가능
  //3.인스턴스를 console.log()등으로 찍을때 static의 변수를 숨겨준다.
  class StaticUser { 
    static skill = 'js'; 
    intro = StaticUser.skill + '전문가입니다'
  }
  
  var 찰스 = new StaticUser();
  console.log(찰스);//js전문가입니다
  
  StaticUser.skill = 'python';
  var 민수 = new StaticUser();
  console.log(민수);//python전문가입니다


//숙제2
class UserHomeWork {
  private static x:Number = 10;
  public static y:Number = 20;

  addOne(x){
    UserHomeWork.x+=x;
  }

  printX(){
    console.log(UserHomeWork.x)
  }
}
let userHomeWork=new UserHomeWork()
userHomeWork.addOne(3) //이렇게 하면 x가 3 더해져야함
userHomeWork.addOne(4) //이렇게 하면 x가 4 더해져야함
userHomeWork.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함


//숙제3
class Square {
  width:number
  height:number
  color:string
  div:HTMLElement

  constructor(width:number,height:number,color:string) {
    this.width=width
    this.height=height
    this.color=color

    this.initBodyElement()
  }

  initBodyElement(){
    const body=document.body
    //Body태그안에 다 지우고 div하나만 넣음
    while ( body.hasChildNodes() ) {
      //Narrowing 
      if(body instanceof HTMLElement&&body.firstChild){
        body.removeChild( body.firstChild );
        continue
      }
      break
    }
    this.div=body.appendChild(document.createElement('div'))
  }

  draw(){
    const addDiv=document.createElement('div')
    const x:number=Math.random()*window.innerHeight;
    const y:number=Math.random()*window.innerWidth;
    const stylestring = `position:absolute;top:${x}px;left:${y}px;height:40px;width:40px;background-color:${this.color};`;
		addDiv.style.cssText = stylestring;
    this.div.appendChild(addDiv);
  }  
}

let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()


export type CarExport = {
  wheel : number,
  model : string
}

export interface BikeExport {
  wheel : 2,
  model : string
}

namespace DogNameSpace{
  interface Dog{
    name:string,
    age:number
  }
}