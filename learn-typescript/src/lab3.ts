function Hello(name : string):  void{
    console.log(Hello);
}
// array function
const SumAB = (a:number , b: number):number=>{
    return a+b;
};
console.log(SumAB(3,4));
//lab3 phan 1 
const averageScore=(...scores:number[]):number=>{
    const total =scores.reduce((sum,score)=>sum +score,0);
    return total/scores.length;
}
console.log(averageScore(7,8,9));
//phan2
type CheckNumber = (number:number)=>"even"|"old";
const CheckNumber:CheckNumber =(number)=>{
    return number %2===0? "even" : "old"
};
console.log(CheckNumber(4));
console.log(CheckNumber(8));
console.log(CheckNumber(9));

//phan 3
function createUser(name :string, age?:number,role:string="user"):string{
    return `ten:${name}, tuoi${age},vai tro:${role}`
};
console.log(createUser("kien",21,"admin"));
console.log(createUser("thay hoa" ,30,"giao vien"));

//phan 4
type Product = {
    name: string;
    price: number;
};
const mergeProducts = (list1: Product[], list2: Product[]): Product[] => {
    return [...list1, ...list2];
};
const printProducts = (products: Product[]): void => {
    products.forEach(product => {
        console.log(`Tên: ${product.name}, Giá: ${product.price}`);
    });
};
const products1: Product[] = [
    { name: "Áo thun", price: 10 },
    { name: "Quần jean", price: 8 }
];
const products2: Product[] = [
    { name: "Giày", price: 20 },
    { name: "Mũ", price: 5 }
];
const products = mergeProducts(products1, products2);
printProducts(products);

// default params
const sayHelloUser =(user :string|number="kien")=>{
    return user;
    
};
console.log(sayHelloUser());
console.log(sayHelloUser("dubai"));
console.log(sayHelloUser(8386));

//option params
const sayHelloPerson =(user?:string)=>{
    return user;
};
console.log(sayHelloPerson());


