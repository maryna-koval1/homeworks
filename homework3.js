let a = 5;
let b = '*';
function drawTriangle(width, symbol) {
    let line = '';
    for(let i = 1; i <= width; i++){
        line += symbol;
        console.log(line);
    }
}
drawTriangle(a, b);

function drawTriangleSecond(width, symbol) {
    let line = '';
    let i = 1;
    while (i <= width) {
        line += symbol;
        console.log(line);
        i++;
    }
}
drawTriangleSecond(a, b);

console.log('-------Завдання 2----------');

function multipleThree(){
    let sum = 0;    
    for (let j=0; j<= 100; j++){
        if(j % 3 === 0){
            sum += j;
        }
    }   
    console.log('Сума всіх чисел кратних 3 = '+sum);
}
multipleThree();

console.log('-------Завдання 3----------');

let c = 5;
let d = 2;
function pow(numb,power){
    result = numb ** power;
    console.log('Число ' +numb+ ' в ступені '+power+ ' = ' +result);
}
pow(c,d);