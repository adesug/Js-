//cara kerja 
//Method map menerapkan function yang sama untuk setiap nilai didalam array dan me-return hasilnya sebagai array baru. Seperti yang dapat Anda lihat di bawah ini, function doubledNumbers menghasilkan array baru yang berisi nilai hasil perkalian 2 dengan semua nilai didalam array numbers.

//array
// const numbers = [1,3,2];
// const doubledNumbers = numbers.map((number)=> {
//     return number *2;
// });
// console.log(doubledNumbers);

//array object
const name = [
    {firstName:"luka", lastName: "modric"},
    {firstName:"casse", lastName: "mirong"}
];

const fullName = name.map((names) =>{
    return names.firstName + "" + names.lastName;
});
console.log(fullName);