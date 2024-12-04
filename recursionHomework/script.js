// Task 1

// Дано натуральное число N. +

// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае. + 

// Операцией возведения в степень пользоваться нельзя! +

// Ввод
// Вывод
// 8
// YES
// 3
// NO

function calcGradeTwo(N) {
    if (N <= 0) {
        return false;
    }
    if (N === 1) {
        return true;
    }
    if (N % 2 !== 0) {
        return false;
    }
    return calcGradeTwo(N / 2);
}

function gradeTwo(N) {
    if (calcGradeTwo(N)) {
        console.log(`Number: ${N}, Answer: YES`);
    } else {
        console.log(`Number: ${N}, Answer: NO`);
    }
}

// checking the answer
gradeTwo(8)
gradeTwo(3)


// Task 2

// Дано натуральное число N. +

// Вычислите сумму его цифр. 

// При решении этой задачи нельзя использовать:
// строки, списки, массивы (ну и циклы, разумеется).

// Ввод
// Вывод
// 179
// 17
// 985
// 22

function sumOfDigits(N) {
    // Базовый случай: если число меньше 10, то его сумма цифр равна самому числу
    if (N < 10) {
        return N;
    }
    // Рекурсивный случай: сумма последней цифры и суммы цифр оставшейся части числа
    return N % 10 + sumOfDigits(Math.floor(N / 10));
}

// Проверка результатов
console.log(sumOfDigits(179));  // 17
console.log(sumOfDigits(985));  // 22
console.log(sumOfDigits(12345));  // 15
console.log(sumOfDigits(6));  // 6

// Task 3

// Напишите рекурсивный метод,

// который выводит на экран

// числа Фибоначчи 

// до N-ого элемента.

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function generateFibonacciSequence(n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(fibonacci(i));
    }
    return sequence;
}

function displayFibonacci(n) {
    const fibSequence = generateFibonacciSequence(n);
    const pTag = document.getElementById('fibonacci-sequence');
    pTag.textContent = fibSequence.join(', ');
    pTag.style.fontSize = '30px';
    pTag.style.fontFamily = 'Montserrat';
    pTag.style.fontWeight = 'bold';
}

displayFibonacci(10);

// Task 4

// Напишите рекурсивный метод,

// который проверяет,

// является ли строка палиндромом.

function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    function checkPalindrome(start, end) {
        if (start >= end) return true;

        if (str[start] !== str[end]) return false;

        return checkPalindrome(start + 1, end - 1);
    }

    return checkPalindrome(0, str.length - 1);
}

const inputStr = "A man, a plan, a canal, Panama";
const result = isPalindrome(inputStr);

const resultTag = document.getElementById('result');
resultTag.textContent = result ? "Строка является палиндромом." : "Строка не является палиндромом.";
resultTag.style.fontSize = '30px';
resultTag.style.fontFamily = 'Montserrat';
resultTag.style.fontWeight = 'bold';












