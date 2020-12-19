//menerima nilai dari console
//dengan mengimport paket readline-sync, Anda akan dapat memasukkan nilai ke dalam console dan menggunakan nilai tersebut dalam program Anda. Caranya, import paket seperti yang ditunjukkan digambar sebelah kiri, lalu tulis readlineSync.question(pertanyaan). Saat pertanyaan di-print, code akan berhenti hingga nilai yang berupa string dimasukkan.

//menggunakan nilai input 
//Nilai input dapat diberikan untuk constant dan variable dalam program Anda. Seperti yang dapat Anda lihat digambar sebelah kiri, code readlineSync.question dapat diberikan untuk constant, sehingga nilai input akan disimpan ke constant tersebut. Dalam kasus ini, nilai input akan disimpan dalam constant name.
//contoh
// import readlineSync from "realine-sync";

// const name = readlineSync.question("masukkan nama:");
// console.log(`${name} dimasukkan`);
//hasil
// masukkan nama : Ken 
// Ken dimasukkan


import { dog1, dog2 } from "./data/dogData";

console.log("---------");
dog1.info();
console.log("---------");
dog2.info();
