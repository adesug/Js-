// Function adalah kumpulan instruksi
//Untuk membuat function, Anda harus mendefinisikannya. Untuk mendefinisikan function, ketik function(), lalu tulis hal yang Anda ingin function tersebut lakukan didalam {} (tanda kurung kurawal). Kita akan mempelajari lebih dalam tentang definisi function kedepannya.

// const functionName = function(){
// di isi intruksi
//};

// const perkenalan = function(){ //penulisan model lama 
// //penulisan function model baru
// //const perkenalan = ()=>{} //lebih ringkas
//     console.log("halo")
//     console.log("yaul")
// }
// perkenalan(); // mencetak dengan function


//------------argument
// Nilai data yang diteruskan ke function disebut argument.
//Anda dapat menggunakan nilai function tersebut dengan meneruskan nilainya saat Anda memanggil function tersebut.
//Nilai yang diteruskan saat Anda memanggil function disebut argument, namun variable yang tertulis dalam definisi disebut parameter.
// Seperti yang ditampilkan di bawah ini, argument dapat diteruskan ke function dengan menuliskan nama parameter dalam tanda kurung, seperti ini (parameter) =>.

const perkenalan = (nama)=>{
    console.log("halo");
    console.log(`nama saya ${nama}`);
}
perkenalan("ahmad");
perkenalan("dani");

//hasil 
// halo
// nama saya ahmad
// halo
// nama saya dani

//contoh function dengan argumen
// Tambahkan parameter number1 dan number2 kedalam function 
// const add = (number1, number2)=> {
//     // Print penjumlahaan number1 dan number2
//     console.log(number1 + number2);
    
//   };
  
//   // Panggil function dengan 5 dan 7 sebagai argument
//   add(5,7);
  