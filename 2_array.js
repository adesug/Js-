// Bila Anda ingin mengelola beberapa nilai sebagai grup, array akan sangat bermanfaat. Array dibuat seperti [nilai1, nilai2, nilai3]. Setiap nilai dalam array disebut element. Saat menggunakan array, beberapa string atau integer dapat dituliskan secara bersamaan seperti yang ditampilkan digambar kanan.
// array bernilai strung ["ade","dede","dude"]
// array bernilai int [27,25,28] nilai= element , urutan= indeks

const anjing = ["buldog","shiba","boxer"];
console.log(anjing); //memanggil semua anjing
console.log(anjing[2]); //memanggil anjing dengan index array
//mengupdate element
console.log(anjing[1]);
anjing[1]="loe";
console.log(anjing[1]);

//mencetak array dengan loop for 
for(let i = 0; i < 3; i++ ){ 
    console.log(anjing[i]); //lebih singkat untuk menctak semua 
}

//properti variabelName.length
console.log(anjing.length); //mencetak jumlah banyaknya array
//mencetak semua array dengan lenght yuyu
 for(let i = 0 ; i< anjing.length; i++){
     console.log(anjing[i]);
 }

 