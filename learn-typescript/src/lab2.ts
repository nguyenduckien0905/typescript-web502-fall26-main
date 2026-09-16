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