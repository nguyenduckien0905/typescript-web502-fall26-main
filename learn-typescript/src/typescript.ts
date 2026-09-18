console.log("typescript");

let age:number=25;
age=30;

let myName:string="kiendubai";
myName="20";

 let dihockhong:boolean = true;
 dihockhong= false;

 const student :{name: string ; age: number ; isActive: boolean}={
    name:"kien",
    age:21,
    isActive:true,
 };

 // enum
 enum status{
   done ="hoan thanh ",
   doing="dang lam"
 }
 //array
const numbers: number[] = [1, 2, 3, 4];
const students: string[] = ["nam", "an"];
const products: { name: string }[] = [{ name: "laptop" }, { name: "laptop" }];
//any
let data :any ="data";
data =1;
//union:kethop
let result:string| number="ket qua";
result=3;
//literal
let doSomething: "success" |"error" ="success";
let value :null|undefined;
