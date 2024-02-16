//homework4 part-1

function averageOfPositiveNumbers(...numbers) {
    let sum = 0;
    let count = 0;


    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
            count++;
        }
    }

    if (count === 0) {
        console.log("Нет положительных чисел для вычисления среднего.");
        return;
    }

    const average = sum / count;
    console.log("Средняя арифметическая число:", average);
}

averageOfPositiveNumbers(2, -78, 45, 4, -7, -6, -10, 26, 30, 8);

//homework4 part-2

function sumOfEvenSquares(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum += numbers[i] * numbers[i];
        }
    }

    return sum;
}

const numbers = [6];
console.log(sumOfEvenSquares(numbers));


//homework4 part-3

function isPrime(number) {
    if (number < 2) {
        console.log(false);
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log(false);
            return;
        }
    }

    console.log(true);
}

isPrime(16); 
isPrime(7);

//что бы работал github
