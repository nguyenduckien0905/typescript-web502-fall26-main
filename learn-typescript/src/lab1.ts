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
function demKyTu(chuoi: string, kyTu: string): number {
    let dem = 0;
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTu) {
            dem++;
        }
    }
    return dem;
}
console.log(demKyTu("hello", "l"));
console.log(demKyTu("nguyenduckien", "k"));

// so nguyen to
function laSoNguyenTo(n: number): boolean {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(laSoNguyenTo(7));
console.log(laSoNguyenTo(10));
console.log(laSoNguyenTo(1)); 
