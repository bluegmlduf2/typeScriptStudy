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