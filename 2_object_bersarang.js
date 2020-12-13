//object didalam object

//latihan 1
const cafe = {
    name: "Plugin Cafe",
    businessHours: {
      // Tetapkan object yang sudah disediakan untuk businessHours
      opening:"10:00",
      closing:"20:00",
      
      
    },
  };
  
  // Print "Nama: ____"
  console.log(`Nama: ${cafe.name} `);
  
  // Print "Jam: Dari jam ____ sampai jam ____"
  
  console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);

  //latihan2 menggunakan array sebagai nilai dalam object.
  const cafe = {
    name: "Plugin Cafe",
    businessHours: { 
      opening: "10:00",
      closing: "20:00"
    },
    // Tambahkan property menu dan berikan array yang sudah disediakan
    menu:["Kopi", "Teh", "Kue Cokelat"]
    
  };
  
  console.log(`Nama: ${cafe.name}`);
  console.log(`Jam: Dari jam ${cafe.businessHours.opening} sampai jam ${cafe.businessHours.closing}`);
  console.log(`----------------------------`);
  console.log("Menu Rekomendasi");
  
  // Gunakan loop for untuk mem-print nilai array menu 
  
  for (let i = 0; i < cafe.menu.length; i++){
   
    console.log(cafe.menu[i]);
    
  }
  