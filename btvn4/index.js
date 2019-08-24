// const kho = {
//     HP: 20,
//     DELL: 50,
//     MACBOOK: 12,
//     ASUS: 30,

// };
//-----------------------Câu 2-------------------------
// console.log("Số macbook đang có: "+ kho["MACBOOK"]);
//------------------------Câu 3+4+5----------------------
// let nhap = prompt("Nhập hãng máy tính HP,DELL,MACBOOK,ASUS");

//     if (nhap in kho) {
//         console.log("Số máy tính còn trong kho: " +kho[nhap]);
//     }
//     else {
//         let nhap1 = prompt("Hãng không có trong kho bạn có muốn thêm vào danh sách");
//         if (nhap1 == "yes") {
//             kho[nhap] = Number(prompt("Nhập số lượng máy tính của hãng"));
//             console.log(kho);
//         }
//     }

//------------------------Câu 6-----------------------
// kho["DELL"] = 60;
// kho["MACBOOK"] = 10;
// ------------------------Câu 7-----------------------


// for( key in kho){
//     console.log(`Số máy của hãng ${key} trong kho là: `+ kho[key]);
// }
// ------------------------Câu 8-----------------------
// let total = 0;
// total = kho.ASUS+kho.DELL+kho.HP+kho.MACBOOK;
// console.log("Số lượng máy tính của tất cả các hãng còn trong kho: "+total);
//---------------------------------Câu 9-------------------------------
// kho.FUJITSU = 15;
// kho.ALIENWARE = 5;
//------------------------------PART 4------------------------

//------------------------------Câu 11------------------------
// const kho1 ={
//     HP: 600,
//     DELL: 650,
//     MACBOOK: 12000,
//     ASUS: 400,
//     ACER: 350,
//     TOSHIBA: 600,
//     FUJITSU: 900,
//     ALIENWARE: 1000,

// }
// let nhap = prompt("Nhập hãng máy tính ");

//     if (nhap in kho1) {
//         console.log("Đơn giá 1 máy: " +kho1[nhap]);
//         let nhap1 = prompt("Bạn có muốn đặt mua máy không?");
//         if (nhap1 =="yes") {
//              let nhap2= Number(prompt("Nhập số lượng máy tính cần mua"));
//              let total = kho1[nhap]*nhap2;
//             console.log("Số tiền bạn cần phải trả là "+total);
            
//         }
//     }
// console.log("Số máy còn trong kho: "+(kho[nhap]-nhap2));
//------------------------------Câu 17--------------------------
// let nhap = prompt("Nhập hãng máy tính và số lượng trong 1 dòng cách nhau bởi dấu hai chấm");
// let giaTri=nhap.split(":");
// if (giaTri[0] in kho1) {
//     let total= Number(giaTri[1])*kho1[giaTri[0]];
//     console.log("Số tiền bạn phải trả là: "+ total);

// }
//------------------------------Câu 18--------------------------
// let totalMayTrongKho = 0;
// for (key in kho) {
//     console.log(`Tổng tiền số máy  của hãng ${key} trong kho là: `+ kho[key]*kho1[key]);
//     totalMayTrongKho += kho[key]*kho1[key];
// }
// console.log("Giá trị kho hàng: "+ totalMayTrongKho);
//--------------------------------------PART 7-------------------------------
// const info ={
//     Name: "Light",
//     Age: 17,
//     Strength: 8,
//     Defense: 10,
//     HP: 100,
//     Backpack: ["Shield", "Bread Loaf"],
//     Gold: 100,
//     Level: 2,
// }
// info["Gold"] += 50;
// info["Backpack"].push = "FlintStone";
// info["Pocket"] = ["MonsterDex","Flashlight"];
// console.log(info);
//--------------------------------------PART 8-------------------------------
const info = [
    {
        Name : "Tackle",
        MinimumLevel:1,
        Damage:5,
        HitRate: 0.3


    },

    {
        Name: "Quick attack",
        MinimumLevel: 2,
        Damage: 3,
        HitRate: 0.5,

    },
    {
        Name: "Strong Kick",
        MinimumLevel: 4,
        Damage: 9,
        HitRate: 0.2,

    },
    
]
// for( key in info){
//     console.log(`Số máy của hãng ${key} trong kho là: `+ info[key]);
// }
for (let i = 0; i < info.length; i++) {
    console.log(`Skill ${i+1}`);
    console.log(`Name: ${info[i].Name}`);
    console.log(`Minimumlevel: ${info[i].MinimumLevel}`);
    console.log(`Damage: ${info[i].Damage}`);
    console.log(`HitRate: ${info[i].HitRate}`);

}

    
    

// --------------------------------------Câu 27+28------------------------------
console.log("----------------------------------------------------")
let chonLevel = prompt("Nhập level của bạn");
let chonSkill = prompt("Bạn muốn dùng skill nào?")-1;
if (chonLevel>=info[chonSkill].MinimumLevel) {
    console.log("Damage của bạn là :"+ info[chonSkill].Damage);  
            let xacXuat =Math.random();
            if (xacXuat>info[chonSkill].HitRate) {
                console.log("Skill đã không trúng mục tiêu");
            }
}
else {
    console.log("bạn không đủ level để dùng");
    }
    






