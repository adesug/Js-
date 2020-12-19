// Statement export default disebut default export. Dengan export default, saat file di-import, export default value akan secara otomatis di-import. Karena itu, nama nilai saat meng-export dan meng-import code dapat berbeda.
//Export default hanya dapat digunakan untuk satu nilai dalam satu file. Karena nilai export default akan secara otomatis di-import saat file tersebut di-import, maka hanya satu nilai yang diperbolehkan. Jika Anda ingin meng-export beberapa nilai, gunakan export bernama 
// export bernama di-export dengan menuliskan nama di dalam {} (tanda kurung kurawal) tanpa menuliskan default. Saat meng-import nilai export bernama, tentukan nama export tersebut di file yang akan menerimanya. Nilai yang Anda import dapat ditentukan dengan menulis import { valueName } from "./fileName" menggunakan {}.
//idak seperti export default, export bernama dapat meng-export beberapa nilai. menulis export { name1, name2 } akan memungkinkan Anda membuat beberapa export bernama dari satu file. Beberapa import juga dapat dibuat bersamaan dengan menggunakan koma untuk memisahkan nilai-nilai tersebut.




// Tulis ulang code dibawah and import constant dog1 dan dog2
import { dog1, dog2} from "./dogData";

// Salin code di jendela instruksi dan tulis ulang constant dog1 dan dog2 agar dapat dicetak

console.log("---------");
dog1.info();
console.log("---------");
dog2.info();
