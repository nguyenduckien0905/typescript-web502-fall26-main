// //class
// class Student{
//     id:string;
//     name:string;
//     age:number;
//     constructor(id:string,name:string,age:number){
//         this.id=id;
//         this.name=name;
//         this.age=age;


//     }
//     //method
//     ShowStudent(){
//         console.log(this.id);
        
//     }
// }

// const sv1 = new Student("ph70010","kien",21);
// sv1.ShowStudent();
// //interface
// interface User{
//     name:string;
//     age:number;
// }
// //type:object
// type UserInfo={
//     id:number;
//     name:string;
//     age:number;
// }
// const user:UserInfo={
//     id:1,
//     name:"kien",
//     age:30,
// }
//bai1
class Student {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    greet(){
        console.log(`ID: ${this.id}, Ten: ${this.name}`);
    }
}
const student = new Student(1, "Nguyễn Đức Kiên");
student.greet();

//bai2
interface User {
    id: number;
    email: string;
    phone?: string;
}
const user: User = {
    id: 1,
    email: "test@gmail.com"
};
console.log(user);

//bai3
type Product = {
    id: number;
    name: string;
    price: number;
};
const product: Product = {
    id: 1,
    name: "Áo thun",
    price: 200000
};
console.log(product);

// bai4
type Status = "loading" | "success" | "error";
function logStatus(status: Status): void {
    if (status === "loading") {
        console.log("Đang tải...");
    } else if (status === "success") {
        console.log("Thành công!");
    } else {
        console.log("Có lỗi xảy ra!");
    }
}

logStatus("loading");
logStatus("success");
logStatus("error");

//bai5
function identity<T>(value: T): T {
    return value;
}
let numberValue = identity<number>(100);
let stringValue = identity<string>("Hello");
let booleanValue = identity<boolean>(true);
console.log(numberValue);
console.log(stringValue);
console.log(booleanValue);