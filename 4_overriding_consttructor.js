// Constructor dapat ditimpa dengan cara yang sama seperti method. Misalnya, Anda ingin menambahkan property ke class anak. Untuk melakukan overriding constructor, Anda harus menambahkan super() dibaris pertama constructor penimpa. Mari kita pelajari hal ini lebih lanjut dalam slide berikutnya.

class ChildClass extends parentClass {
    constructor(){
        super(name, age); //dibutuhkan dibaris pertama construktor
        //code untuk construktor milik class anak  

        this.breed = breed;
        // menjalankan constructor milik class anak
    }
}