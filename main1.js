//Viết một chương trình nhận một số nhập vào và chèn dấu (-) giữa 2  số chẵn. 
//Ví dụ nếu bạn nhập vào 025468 thì kết quả của chương trình sẽ là 0-254-6-8.
let so = prompt('Nhập vào số :');
chuoi = so.toString();
console.log(chuoi);
let mang = chuoi.split('');
let newmang = [];
let j =0;
let n = mang.length;
let a = mang[0];
for(let i = 0; i < n; i++){    
    if((a % 2 == 0) && (mang[i+1] % 2 == 0)){
        newmang[j++] = a;
        newmang[j++] = '-';
        a = mang[i + 1];
    }
    else{
       a += mang[i + 1];
    }
}
newmang[j] = mang[n - 1];
console.log(newmang);