//penggunaan callback
const printKen = () => {
    console.log("Ninja Ken");
  };
  
  const printMaster = () => {
    console.log("Guru Domba");
  };
  
  const call = (callback) => {
    console.log("Memanggil function callback.");
    callback();
  };
  
  // Ketik ulang argument ini sebagai printMaster dan konfirmasikan output-nya
  call(printKen);
  call(printMaster);

  //Function yang diteruskan ke function lain sebagai argument disebut callback function.
  // function(argument); -> string, int, boolean ->fUNCTION
  //            ^--------------------------------------^ //FUNCTION yang diteruskan sebagai argument disebut callback function

//soal

  const printKen = () => {
    console.log("Ninja Ken");
  };
  
  // Tambahkan parameter callback ke function call
  const call = (callback) => {
    console.log("Memanggil function callback.");
    // Panggil callback function
    callback();
  };
  
  // Teruskan printKen sebagai argument dan jalankan function call
  
  call(printKen);
//-------------------------------------------------
  //###################mendeklarasikan callback sebagai argumen
  const printKen = () => {
    console.log("Ninja Ken");
  };
  
  const call = (callback) => {
    console.log("Memanggil callback function.");
    callback();
  };
  
  call(printKen);
  
  // Deklarasikan function didalam argument dan teruskan
  call(() => {
    console.log("Guru Domba");
  });
//--------------------------------------------------
  //#### argument callback function
  const call = (callback) => {
    callback("Ninja Ken", 14);
  };
  
  // Tambahkan sebuah function yang menerima dua argument didalam argument call
  call((name, age) => {
    console.log(`${name} berusia ${age} tahun.`);
  });
  