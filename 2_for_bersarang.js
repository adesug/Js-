// let s ='';
// for(let i = 0; i <6; i++ ){ //bawah
    
//     for(let a = 0; a <=i; a++){ //kanan
//         s += '^'; //isi dari variabel
       
//     }
   
//     s += '\n'; //cetak kebawah
// }
// console.log(s);

let s =''; 
for(let i = 6; i >0; i-- ){ //bawah
    
    for(let a = 0; a <i; a++){ //kanan
        s += '^'; //isi dari variabel
       
    }
   
    s += '\n'; //cetak kebawah
}
console.log(s);

