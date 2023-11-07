//////////////<!-- 1. const array = [1,2,3,4,5]. Yeni array yaradın və bu array-in əksinə düzülmüş formada olsun (e.x [5,4,3,2,1])
// const array = [1, 2, 3, 4, 5];
// const yeniarray = [];
// for (let i=array.length-1; i >= 0;i--){
//     yeniarray.push(array[i]);
// }
// console.log(yeniarray);


/////////////<!-- 2. const strArray = ["cat","mouse","panter","chicken"] bu array-dən "cat" sözünü silin və sonuna "bird" əlavə edin.
// const strArray = ["cat", "mouse", "panter", "chicken"];
// const konsulos = strArray.shift();
// strArray.push("bird");
// console.log(strArray);


// /////////const array = [1,2,3,4,5]. Bu ədədlərin yanına kvadrat-ların əlavə edin. (e.x [1,2,3,4,5,1,4,9,16,25])
const array = [1, 2, 3, 4, 5];
const uzuznluq=array.length
for (let i = 0; i < uzuznluq; i++) {
    array.push(array[i]**2);
}
console.log(array);






// ////////4. Ədədlərdən ibarət array verilir. Array-də olan cüt ədədləri ekrana çıxardın.(Əlavə: yeni array-ə əlavə edin cüt ədədləri)
// const array = [23,45,7,89,12,43,56,86,453,7,8786,,32,35,64,6];
// const cutededler = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         cutededler.push(array[i]); 
//     }
// }
// console.log("cüt ədədlər:", cutededler);

