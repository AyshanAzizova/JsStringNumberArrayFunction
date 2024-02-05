// function Sum(num1, num2) {
//  return cem= length(num2 - num1).reduce((Sum, num1, num2) => Sum + num1 + num2, 0)
// } --- bununla yazmaq istedim amma length goturmedi

// TASK1
// Bir funksiya olacaq, həmin funksiya 2 parameter qəbul edəcək.Funksiyanın görəcəyi iş nədir-Girinlən 2 parametr araligindaki ədədlərin cəmini tapacaq.İlk parameter 2ci parameterden kicik olmalidir.

// function Sum(num1, num2) {
//     let cem = 0;
//     for (let i = num1; i <= num2; i++) {
//         if (num1 < num2) {
//             cem += i;
//         }
//         else { "1ci eded 2ciden boyukdur" }
//     }
//     return cem;
// }
// console.log(Sum(2,4));


// TASK2
// Filter methodunu custom olaraq siz yazacaqsiz.Filter funksiyasi olacaq.Hazir funksiya olmayacaq.
// Filter müəyyən bir şərtə cavab verən elementləri seçir və yeni bir array qaytarir.
// let arr = [1, 3, 5, 7, 9]
// function CustomFilter(params) {
//     let newArr = [];
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] % 3 === 0) {
//             newArr.push(params[i]);
//         }

//     }
//     return newArr
// }
// console.log(CustomFilter(arr));


// TASK4
// Map ve reduce custom yaz
// Map hər bir elementə müəyyən bir əməliyyatı tətbiq edir və yeni bir array qaytarir
// let arr = [1, 3, 5, 7, 9]
// function CustomMap(params) {
//     let newArr = [];
//     for (let i = 0; i < params.length; i++) {
//         newArr.push(arr[i] * 2);
//     }
//     return newArr
// }
// console.log(CustomMap(arr));


// Reduce elementleri sirayla birlesdirerek tek bir deyer qaytarir
// let arr = [1, 1, 2, 3, 4]
// function CustomReduce(params) {
//     let hasil = 1;
//     for (let i = 0; i < params.length; i++) {
//         hasil = hasil * params[i];
//     }
//     return hasil
// }
// console.log(CustomReduce(arr));





