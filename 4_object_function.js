// Untuk membuat object secara efisien, kita harus membuat "blueprint" (kerangka) object tersebut. Misalnya, saat membuat data pengguna, data dapat dibuat dan disusun berdasarkan "blueprint pengguna" yang telah disiapkan sebelumnya.(class dalm js)
//Nilai object juga dapat berupa function. Cara menuliskannya ditunjukkan gambar dibawah ini. Selain itu, cara untuk memanggil function, tulis constantName.propertyName(). Perhatikan bahwa Anda memerlukan tanda () setelah nama property untuk mengindikasikan bahwa nilai adalah function.
//contoh object bernilai function
// const supraX = {
//     tipe : "Injection",
//     honda: ()=>{
//         console.log("One Heart");
//     }
// }

// supra.tipe();// pemanggilan function dalam object

//Membuat Object secara Efisien
//Object, seperti yang kita buat sebelumnya, biasanya digunakan saat membuat situs web. Misalnya, layanan web yang memerlukan fungsi log in, seperti Progate, menggunakan object untuk membuat data pengguna. Bayangkan jika kita harus membuat ini dari awal setiap permintaan login, tidak efisien kan? Oleh sebab itu, Anda akan mempelajari cara membuat data yang serupa dengan mudah.

//Blueprint Object
//Untuk membuat object secara efisien, kita harus membuat "blueprint" (kerangka) object tersebut. Misalnya, saat membuat data pengguna, data dapat dibuat dan disusun berdasarkan "blueprint pengguna" yang telah disiapkan sebelumnya.
//Blueprint yang disebut dalam slide sebelumnya disebut class dalam JavaScript. Dengan menulis class ClassName, seperti yang ditunjukkan di bawah ini, class baru dapat dibuat. Nama class biasanya diawali dengan huruf kapital.

//class User{ //user itu nama class
    
// }

//Karena kita sudah menyiapkan blueprint object, mari kita coba untuk membuat object dari blueprint tersebut. Untuk membuat object dari class, tulis new ClassName(), seperti yang ditunjukkan dibawah ini. Object dibuat dari class yang disebut instance. Instance dari class "Motor" disebut "instance Motor".

// class Motor {

// }
// const motor = new Motor();
// console.log(motor);

//Menambahkan Konten ke Blueprint
//Apa yang dimaksud dengan Constructor?
//class sering memiliki method khusus yang disebut constructor. constructor digunakan untuk memberikan nilai awal ke instance baru. Untuk menambahkan constructor ke class, tulis constructor() { } di dalam tanda kurung kurawal {} class Animal seperti yang ditunjukkan di bawah ini.

// class Motor {
//     constructor(){
//         console.log("Honda");
//     }
// }
// const motor1 = new Motor();
// const motror2 =  new Motor();

// Menambahkan Property & Nilai
//Dalam constructor, mari kita tambahkan informasi terkait instance yang dibuat. Untuk menambahkan property dan nilai kedalam constructor, tulis this.property = nilai.

class Motor {
    constructor(nama,torsi){
        this.nama = nama;
        this.torsi = torsi ;
    }
}

const motor = new Motor("Yamaha", 3);
