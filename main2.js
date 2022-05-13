//Viết một chương trình nhập vào một chuỗi và chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa.
//Ví dụ: nếu bạn nhập vào chuỗi 'The Quick Brown Fox' kết quả của chương trình là 'tHE qUICK bROWN fOX'.
// chuyển hoa thành thường toLowerCase(),Chuyển thường thành hoa toUpperCase()
let chuoi = prompt('Nhập vào 1 chuổi:');
let mang = chuoi.split('');
console.log(mang);
newmang = [];
// mang[i].charCodeAt(0); chuyển đổi kí tự thành số ascci; (65-90 chữ hoa) (97-122 chữ thường)
for(let i = 0; i <  mang.length; i++){
    if(mang[i].charCodeAt() <=90){
        newmang[i] = mang[i].toLowerCase();
    }
    else{
        newmang[i] = mang[i].toUpperCase();
    }
}
console.log(newmang);
newchuoi = newmang.join('');

console.log(newchuoi);

