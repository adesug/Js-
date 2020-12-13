// Element array tidak harus berupa string, integer atau boolean, namun bisa juga sebagai object. Berkat karakteristik ini, array seperti dalam gambar dikiri dapat dibuat. Disini, untuk mencegah code menjadi terlalu panjang, setiap element sebaiknya dimulai dibaris baru.
const item = [
    {name:"gelas", price:5000},
    {name:"piring", price:10000}
];
console.log(item);
//Mendapatkan Object dalam Array
console.log(item[1]);
// Mendapatkan Nilai Object di dalam Array
console.log(item[1].name);

//menambahkan kata denan data object yang ada
console.log(`saya membeli ${item[1].name} dengan harga Rp. ${item[1].price}`);