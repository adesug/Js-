//Inheritance adalah cara membuat class baru berdasarkan class yang sudah ada. Misalnya, bila class Dog diwariskan dari class Animal, class Dog juga akan memiliki semua method yang didefinisikan dalam class Animal.

// class Dog extends Animal {}// class dog mewarisi class animal

// class Animal {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
    
//     greet() {
//       console.log("Halo");
//     }
    
//     info() {
//       this.greet();
//       console.log(`Nama saya adalah ${this.name}`);
//       console.log(`Saya berumur ${this.age} tahun`);
//     }
//   }
  
  // Definisikan class Dog agar dapat menerima warisan dari class Animal
  class Dog extends Animal {
    
  }
  
  
  const animal = new Animal("Leo", 3);
  animal.info();

  //menggunakan inheritance class
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
  }
  
  // Terapkan instance class Dog ke constant dog
  const dog = new Dog ("Leo", 4);
  
  // Panggil method info dari constant dog
  dog.info();

  //