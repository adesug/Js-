//Function yang berada didalam sebuah class disebut Method. Method bisa dibilang seperti "aksi" milik sebuah instance. Jika data seperti name dan age dapat ditambahkan menggunakan property, method dapat mengekspresikan seluruh kumpulan instruksi seperti memberikan salam dan menghitung nilai.
//Method dideklarasikan dalam class dengan menulis methodName() { }.
// Sama seperti function, code dalam method harus dituliskan didalam {}.

class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    // Tambahkan method info
    info(){
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
    
  }
  
  const animal = new Animal("Leo", 3);
  animal.greet();
  
  // Panggil method info menggunakan constant animal
  animal.info();