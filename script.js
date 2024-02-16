//let age = prompt('Твій вік:');
var age =22;
if (age <= 0 || age >= 100){
    console.log('Ви ввели невірний вік'); 
} else if (isNaN(age)){
    console.log('Ви ввели текст замість віку');
} else if(age % 10 === 1 && age!=11){
    console.log('Тобі '+age+' рік');
} else if ((age % 10 === 2 || age % 10 === 4 || age % 10 === 3) && (age < 12 || age > 14)){
    console.log('Тобі '+age+' роки');
} else {
    console.log('Тобі '+age+' років'); 
}
