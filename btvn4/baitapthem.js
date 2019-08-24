let count = 0;
let flag = true
for (let i = 0; flag; i++) {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    let c = Math.floor(Math.random() * 20);
    let tong = a+b;
    let quiz = prompt(`${a} + ${b} = ${c}  y or n ?  Kết quả ${tong}`);

    if (quiz === "y") {
            if ((tong===c)) {
                count++;
            }   
            else{
            flag = false;
            console.log(`OVER GAME`);
            console.log(`You had corectly ${count}.`);
        
            }
    }
    if (quiz === "n") {
        if (tong!==c) {
            count++;
        }
        else{
            flag = false;
            console.log(`OVER GAME`);
            console.log(`You had corectly ${count}.`);
        }
    }


    
    
}

    
    


