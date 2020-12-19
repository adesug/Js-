//Method find memungkinkan kita untuk menemukan nilai pertama yang sesuai dengan kondisi yang kita tentukan.
//Untuk mendapatkan semua nilai yang sesuai dengan kondisi tertentu, gunakan method filter. Method ini membuat dan mengembalikan array baru dengan semua nilai yang sesuai. Contoh di bawah ini menunjukkan cara mendapatkan semua nilai dari array numbers yang "lebih besar dari 3".
//note jika method find hanya untuk menemukan object yang dimaksud dan hasilnya hanya 1 ,jika filter akan menemukan semua object yang di cari sesuai kondisi .
// kasus array
// const numbers = [1,3,5,2,8];
// const filteredNumbers = numbers.filter((Number)=>{
//     return Number > 1 ;
// });
// console.log(filteredNumbers);

//kasus object 
// const characters = [
//     {name: "adesug", age: 17},
//     {name: "sugade", age: 16},
//     {name: "desuga", age: 15}
// ];

// const filteredCharacters = characters.filter(
//     (characters) => { // -> object callback function
//     return characters.age > 15; //property object callback function
// }
// );
// console.log(filteredCharacters);

//study
const numbers = [1, 2, 3, 4];

// Dapatkan semua nomor genap dari array numbers dengan menggunakan method filter,
// dan tetapkan hasilnya ke constant evenNumbers 
const evenNumbers = numbers.filter((number)=>{

    return number %2 === 0 ;
    
  });

// Print nilai evenNumbers

console.log(evenNumbers);

const characters = [
  {id: 1, name:"Ninja Ken", age: 14},
  {id: 2, name:"Baby Ben", age: 5},
  {id: 3, name:"Guru Domba", age: 100}
];

// Dapatkan characters berumur lebih muda dari 20,
// dan tetapkan hasilnya ke constant underTwenty 
 const underTwenty = characters.filter((character)=>{
   return character.age < 20;
 });
// Print nilai underTwenty
console.log(underTwenty);

