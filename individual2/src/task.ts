interface Interface1{
    education: (string)=> string;
    preshow(): void;
}
interface Interface2{
    readonly day: number;
    readonly hour: number;
    readonly patronomic: string;
    readonly bool: boolean;
}
abstract class Person {
    public firstName: string;
    public lastName: string;

    public constructor(name: string){
        this.firstName=name;
    }
    public print(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
    public show(numbs: number[]){
        for(const numb of numbs)
        {
            console.log(numb);
        }
    }
    public static method1(){
        console.log("You call method1 by base class ");
    }
}
class Gamer extends Person implements Interface1{

    public preshow(): void {
        throw new Error("Method not implemented.");
    }
    age: number;
    city: string;

    constructor(a: number,c: string) {
    super(name);
    this.age=a;
    this.city=c;
}
    education(edu:string){
        return `Person ${this.firstName} have ${edu}`;
    }

    showGamer() {
        console.log(`${super.print()} ${this.age} ${this.city}`);
    }

    public show(): void{
        super.print();
        console.log(`Age user is: ${this.age}`);
    }
}
class User extends Gamer implements Interface1,Interface2 {

    day: number;
    hour: number;
    patronomic: string;
    bool: boolean;

    constructor(public phone: number){
        super(12, 'Nikolaev');
    }
    call(){
        console.log('User'+ this.phone + "have this number" );
    }
    public show(): void{
        super.print();
        console.log(`Age user is: ${this.age}`);
        console.log('User'+ this.phone + "have this number" );
    }
    public static boo(bool:boolean){
        if(bool == true){
            console.log("Success!");
        }else {
            console.log("Wrong!");
        }

    }
}

const gamer = new Gamer(16,"Rob");
const user = new User(380956485213);

let interf1 : Interface1[] = [user,gamer,{
    preshow: function() {
        throw new Error("Method not implemented.");
    },
    education: (string) => {
        return 'sdfgasdf';
    }
}
];
for(let Firstinterf of interf1) {
    console.log(Firstinterf.education("high"))

}
let someperson: Person = new Gamer(23,"none");
someperson.print();
someperson.show([14,15,23,18,32]);
Person.method1();
someperson.firstName = "Alina";
console.log(someperson);

let gamer1 = new Gamer(50,"Middle");
console.log(gamer1);
gamer1.show();
gamer1.showGamer();
gamer1.education("High, middle,none");
console.log(gamer1);

let user1= new User(380562145896);
user1.call();
user1.patronomic="Ihorevich";
user1.day=1;
user1.hour=12;
User.boo(true);
user1.print();
user1.show();
Person.method1();
console.log(user1);