//  "undefined"? Mendapatkan Element yang Tidak Ada

// const motor =["supra","astrea","glpro"];
// console.log(motor[1]); //mendapatkan nilai/element
// console.log(motor[4]); //hasil undefined adalah nilai khusus yang berarti nilai tidak bisa didefinisikan.

//coba saja
const characters = [
    {name: "ad", age: 14},
    {name: "sug", age: 100},
    {name: "gian", age: 5},
    // gak ada umur
    {name: "to"}
  ];
  
  for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    
    const character = characters[i];
    
    // console.log(`Nama saya adalah ${character.name}`);
    // console.log(`Saya berumur ${character.age} tahun`);
    //runing umur to pasti undefine

    //untuk mencegah undefined dengan if else
  if( character.age === undefined){
    console.log("umur saya rahasia");
}else{
    console.log(`Saya berumur ${character.age} tahun`);
}
  }

  

  