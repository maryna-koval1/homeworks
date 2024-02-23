var a = 5;
function isValueNan (value) {
    if (typeof(+value) != 'number' || !Number.isFinite(value)){
        console.log ('Value is NaN');
    }
    else{
        console.log ('Value is not NaN')
    }
}
isValueNan(a);

console.log('--------Homework 2-----------')

function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    const total = evenCount + oddCount;
    const evenPercentage = (evenCount / total) * 100;
    const oddPercentage = (oddCount / total) * 100;

    return {
        even: evenCount,
        odd: oddCount,
        evenPercentage: evenPercentage,
        oddPercentage: oddPercentage,
    };
}

const result = checkProbabilityTheory(350);
console.log(result);