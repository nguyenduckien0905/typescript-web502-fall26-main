enum Rate {
    low = 'Thấp',
    medium = 'Trung bình',
    hight = 'Cao'
}

type Product = {
    name: string;
    price: number;
    sale: boolean;
    rate: Rate;
};

let listProducts: Product[] = [
    { name: 'Áo thun', price: 10,sale: true, rate: Rate.hight},
    { name: 'Quần jean', price: 8, sale: false, rate: Rate.medium},
    { name: 'Giày thể thao', price: 15, sale: true, rate: Rate.hight},
    { name: 'Mũ', price: 5, sale: true, rate: Rate.low},
    { name: 'Túi xách', price: 3, sale: false, rate: Rate.medium}
];
console.log(listProducts);
//
function addDescription() {
  listProducts = listProducts.map(product => ({
    ...product,
    description: product.price > 5 ? "Tốt" : "Bình thường"
  }));
  console.log(listProducts);
}
// hien thi san pham bang foreach
function showProducts(){
    listProducts.forEach(product=>{
        console.log(
            "ten san pham :",product.name,
            "gia ban :",product.price,
            "sale:",product.sale,
            "danh gia:",product.rate,
        );
    });
}
//tinh tong bang reduce
function tonggiaban(){
    let tong = listProducts.reduce((sum,product)=>{
        return sum + product.price;
    },0);
    console.log("tong gia ban:",tong);
}
 //loc san pham sale danh gia trung binh
 function filterProducts(){
    let result=listProducts.filter(product=>{
        product.sale===true&&( product.rate ===Rate.medium ||product.rate===Rate.hight)
    });
    console.log(result);
    
 }   
 addDescription();
showProducts();
tonggiaban();
filterProducts();

