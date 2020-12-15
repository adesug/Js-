//Method dapat ditambahkan ke class yang dibuat menggunakan inheritance dengan cara yang sama seperti class normal. Di bawah ini, Anda dapat melihat method getHumanAge yang dapat mengkonversikan umur anjing ke umur manusia.

//nilai return  dalam method
// Dalam method, nilai return dapat digunakan sama seperti function.
// Dibawah ini, nilai return method getHumanAge diberikan untuk constant humanAge.
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  class Dog extends Animal {
    // Tambahkan method getHumanAge
    getHumanAge(){
      return this.age*7;
    }
    
  }
  
  const dog = new Dog("Leo", 4);
  dog.info();
  
  // Panggil method getHumanAge milik instance dog
  const humanAge = dog.getHumanAge();
  
  // Print 「Saya berusia __ tahun dalam umur manusia」
  console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
  
