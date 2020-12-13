// Object, seperti array, digunakan untuk mengelompokkan dan mengelola beberapa nilai. Bila array mengatur nilai secara berurutan berdasarkan index, objects mengelola nilai dengan memberikannya nama yang disebut property.

//array ["nilai1","nilai2","nilai3"];
//object  {property1: nilai1,property2: nilai2}
//Bila element array ditempatkan dalam tanda kurung petak [], object harus ditempatkan dalam tanda kurung kurawal {}. Selanjutnya, setiap property dan nilai object harus dihubungkan dengan tanda titik dua (:), dan seperti array, setiap elementnya harus dipisahkan dengan koma.

const item = {name:"supermie", price:2300};
console.log(item);
//mendapatkan nilai object
console.log(item.name);
//mengupdate nilai object
item.name="indomie";
console.log(item.name);

