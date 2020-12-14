// Nilai yang dihasilkan setelah function dipanggil, disebut nilai return. Sebagian besar function digunakan untuk mengirim nilai return kembali ke tempat function tersebut dipanggil.

const half = (number) => {
    // Return nilai dari variable number dibagi 2
    return number / 2;
  };
  
  // Defenisikan constant result
  const result = half(130);
  
  // Print pesan "Separuh dari 130 adalah ____"
  
  console.log(`Separuh dari 130 adalah ${result}`)

  //penggunaan nilai return if else
  const check = (number) => {
    // periksa apakah number adalah kelipatan dari 3 dan return-kan hasilnya
    return number % 3 === 0;
  };
  
  
  // Panggil function check dalam kondisi statement if
  if ( check(123) ) {
    console.log("Multiple of 3");
  } else {
    console.log("Not a multiple of 3");
  }