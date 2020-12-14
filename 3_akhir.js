// membuat function yang benama getMax, yang berfungsi untuk menemukan nilai tertinggi/maksimum.
// Seperti contoh dibawah, function getMax menerima tiga angka sebagai argument-nya dan me-return nilai maksimum dari ketiga angka tersebut.

// const getMax
// const max = getMax(3,7,5);
// console.log(`nilai maksimum ${max}`);
// nilai maksimum adalah 7

//hasil

const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum
const getMax = (a, b, c) => {            
    let max = a;            
                                            
        if (b > max) {            
          max = b;            
      }            
        if (c > max) {            
          max = c;            
      }            
                                              
        return max;            
};

// Print "Nilai maksimum adalah __"

const max = getMax(number1, number2, number3);
console.log(`Nilai maksimum adalah ${max}`);