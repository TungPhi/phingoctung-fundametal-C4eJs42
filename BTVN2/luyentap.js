//  const listNumber = [5, 1, 8, 92, -1, 30];
//  var find = prompt("Nhập con số bạn cần tìm");//khi và value thì ko cần trừ khi là indexx thì p trừ 1
//  var index = listNumber.indexOf(find);
// if (index == -1) {
//     console.log("Not found in our list");
// }else{
//     console.log(`Found, position ${index}`);
// }

//--------------------------Bài 2-------------------------------
// const listNumber = [5, 1, 8, 92, -1, 30];
// total = 0;
// for (let i = 0; i < listNumber.length; i++) {
//   total += listNumber[i];
    
// }
// console.log(total);

//---------------------------Bài 3--------------------------------
// const listNumber = prompt("Vui lòng nhập vào 1 dãy số để tính các số cách nhau bởi dấu cách");
// const tachSo = listNumber.split(" ");
// total = 0;
// for (let i = 0; i < tachSo.length; i++) {
//     total += Number(tachSo[i]);
    
// }
// console.log(total);

//---------------------------------------Part 2 --------------------------------------
//---------------------------Bài 4--------------------------------
// const listNumber = [5, 1, 8, 92, 7, 30];

// for (let i = 0; i < listNumber.length; i++) {
    
//     if (listNumber[i] %2 == 0) {
//         console.log(listNumber[i]);
//     }
// }
//---------------------------Bài 5--------------------------------
// const listNumber = prompt("Vui lòng nhập vào 1 dãy số để tính các số cách nhau bởi dấu phẩy");
// const tachSo = listNumber.split(",");

// for (let i = 0; i < tachSo.length; i++) {
    
//     if (Number(tachSo[i]) %2 == 0) {
//         console.log(tachSo[i]);
//     }
// }
//---------------------------------------Part 3 --------------------------------------
//---------------------------Bài 6--------------------------------

const Quan = ["ST","BĐ","BTL","CG","ĐĐ",'HBT'];
const DanSo= [150.300,247.100,333.300,266.800,420.900,318.000];
//---------------------------Bài 7--------------------------------
// var maxInNumbers = Math.max.apply(Math, DanSo); 
// var minInNumbers = Math.min.apply(Math, DanSo);
// console.log("Giá trị lớn nhất là " +maxInNumbers+ "<br/>");
// console.log("Giá trị nhỏ nhất là " +minInNumbers+ "<br/>");
// for (let i = 0; i < DanSo.length; i++) {
    
    
// }
// let max = DanSo[0];
// let min = DanSo[0];

// for (let i = 0; i < DanSo.length; i++) {
//     if (max<DanSo[i]) {
//         max = DanSo[i];
        
//     }
// }
// console.log("Giá trị lớn nhất là: "+max);
// for (let i = 0; i < DanSo.length; i++) {
//     if (min>DanSo[i]) {
//         min = DanSo[i];
        
//     }
// }
// console.log("Giá trị lớn nhất là: "+min);

//---------------------------Bài 8--------------------------------
// const findMax = DanSo.indexOf(max);
// const findMim = DanSo.indexOf(min);
// for (let i = 0; i < Quan.length; i++) {
//     if (i == findMax) {
//         console.log("Quận lớn nhất: "+Quan[i]);
//     }
//     if (i == findMim) {
//         console.log("Quận nhỏ nhất: "+Quan[i]);
//     }
    
// }
//---------------------------------------Part 4 --------------------------------------

//---------------------------Bài 9--------------------------------

// const dienTich = [117.43,9.224,43.35,12.04,9.96,10.09];
// let matDo =[];
// for (let i = 0; i < DanSo.length; i++) {
//     var n = DanSo[i]/dienTich[i];
//     matDo.push(n);
    
    
// }
// console.log(matDo);
//---------------------------Bài 10--------------------------------
// totalMatDoDanCu = 0;
// for (let i = 0; i < matDo.length; i++) {
//     totalMatDoDanCu += (matDo[i]);
    
// }
// console.log(totalMatDoDanCu);
// matDoDanCuTrungBinh = totalMatDoDanCu/Quan.length;
// console.log("Mật độ dân số : "+ matDoDanCuTrungBinh);

//---------------------------------------Part 5 --------------------------------------
//---------------------------Bài 11& 12 &13--------------------------------

// let score = [45, 67, 56, 78];
// let max = score[0];
// // let min = score[0];
// score.push(Number(prompt("Enter your new score: ")));
// for (let i = score.length-1; i >= 0; i--) {
//     console.log(score[i]);
    
// }
//---------------------------------------Part 5 --------------------------------------
//---------------------------Bài 14--------------------------------
let score = [45, 67, 56, 78];
score.push(Number(prompt("Enter your new score: ")));
score.sort(function(a, b){

    return b-a});
console.log(score);

    
