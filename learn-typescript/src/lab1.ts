// chu vi hinh chu nhat
function chuvihcn( a:number,b:number){
    return (a + b)*2
}
console.log(chuvihcn(3,4));

// dien tich hinh chu nhat
function dientichhcn(a:number,b:number){
    return(a*b)
}
console.log(dientichhcn(5,5));

//tinh tong
function tinhTong(...numbers: number[]): number {
    let tong = 0;
    for (let number of numbers) {
        tong += number;
    }
    return tong;
}
console.log(tinhTong(1, 2, 3));

//Viết hàm trả về số lượng xuất hiện của 1 kí tự trong chuỗi

