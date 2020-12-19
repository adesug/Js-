//Method forEach digunakan untuk memanggil setiap nilai disebuah array secara berurutan. Dibawah ini adalah contoh cara mem-print setiap nilai dalam array numbers sesuai urutannya.

const nama = ["ade","bagas","nisa"];
nama.forEach((namas)//argumen
 => {
    console.log(namas)
});
//hasil : 
// ade
// bagas
// nisa

//cara kerja forEach
//Argument method forEach adalah Arrow Function yang telah kita pelajari dalam ES6 Study III. Dengan method forEach, setiap nilai array akan diberikan kepada argument arrow function, satu per satu, secara berurutan, dan code dalam arrow function akan diterapkan untuk setiap nilai tersebut. Catatan: sebagian besar method yang akan Anda pelajari dalam pelajaran ini digunakan dengan arrow function.

//CALLBACK FUNCTION------------------------
//Function yang di tulis sebagai argument di function lain yang dipanggil di sebut callback function. Kita akan banyak menggunakan callback function di kursus ini, jadi pastikan untuk memahaminya. 
// (nama) => {console.log(nama)}

//Saat Callback function ditempatkan dalam argument seperti dalam method forEach, code dapat menjadi terlalu panjang. Dalam kasus ini, lebih baik Anda menulis code seperti yang ditunjukkan di bawah ini. Menggunakan beberapa baris setelah {
    //const nama = ["ade","bagas","nisa"];
    // nama.forEach((nama) => {
    //     console.log(nama)
    // });