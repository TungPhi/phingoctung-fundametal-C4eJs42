var quiz = [
    {
        question : "Câu 1: How many legs an octopus has: ",
        answer : {
        1: "One leg",
        2: "Two legs",
        3: "Four legs",
        4: "Eight legs",
        },
        correctAnswer : 4,
    },

    {
        question : "Câu 2: Trong các cây cầu sau, cầu nào là cầu xoay? ",
    answer : {
        1: "Cầu Thanh Trì",
        2: "Cầu Thị Nại",
        3: "Cầu Sông Hàn",
        4: "Cầu Cần Thơ",
    },
    correctAnswer : 2,
    },
    
    {
        question : "Câu 3: AFC Asian Cup 2011 được tổ chức tại quốc gia nào? ",
    answer : {
        1: "Qatar",
        2: "Hàn Quốc",
        3: "Nhật Bản",
        4: "Iraq",
    },
    correctAnswer : 3,
    }
]
let tinhCauHoiTraloiDung = 0;

for (let i = 0; i < quiz.length; i++) {
    console.log(quiz[i].question);
    console.log("1: " +quiz[i].answer[1]);
    console.log("2: " +quiz[i].answer[2]);
    console.log("3: " +quiz[i].answer[3]);
    console.log("4: " +quiz[i].answer[4]);
    var nhap = prompt("Bạn chọn đáp án nào?");
    if (nhap == quiz[i].correctAnswer) {
  console.log("Đáp Án: Hura!!! ");
  tinhCauHoiTraloiDung +=1;
    }else{
    console.log("Đáp Án: Not a correct answer :’(");
}
}
console.log("Tổng số câu trả lời đúng: " +tinhCauHoiTraloiDung);
console.log("Phần trăm số câu trả lời đúng: "+ (tinhCauHoiTraloiDung/quiz.length)*100+"%");


