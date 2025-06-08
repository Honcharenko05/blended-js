// Завдання 1
let number = prompt("Введіть число:");

// Перетворюэмо значення на число
number = Number(number);

// Перевірка, чи дорівнює значення числу 10
if (number === 10) {
  alert("Вірно");
} else {
  alert("Невірно");
}

// Завдання 2
const min = Math.floor(Math.random() * 60);

// Визначаємо, в яку чверть години потрапляє число
let message = "";

if (min >= 0 && min < 15) {
  message = `${min} входить в першу чверть`;
} else if (min >= 15 && min < 30) {
  message = `${min} входить в другу чверть`;
} else if (min >= 30 && min < 45) {
  message = `${min} входить в третю чверть`;
} else if (min >= 45 && min <= 59) {
  message = `${min} входить в четверту чверть`;
} else {
  message = "Некоректне значення";
}

// Виводимо результат
alert(message);


// Завдання 3
let num = prompt("Введіть число від 1 до 4:");

// Змінна для збереження результату
let result;

switch (num) {
  case '1':
    result = 'зима';
    break;
  case '2':
    result = 'весна';
    break;
  case '3':
    result = 'літо';
    break;
  case '4':
    result = 'осінь';
    break;
  default:
    result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
}

// Виводимо результат в консоль
console.log(result);

// Завдання 4
let minutesInput = prompt("Введіть кількість хвилин:");

// Перетворюємо на число
let totalMinutes = Number(minutesInput);

// Розраховуємо години та хвилини
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;

// Форматуємо результат з двома цифрами (наприклад, 01:09)
let formattedHours = String(hours).padStart(2, '0');
let formattedMinutes = String(minutes).padStart(2, '0');

// Виводимо результат у консоль
console.log(`${formattedHours}:${formattedMinutes}`);


// Завдання 5
let login = prompt("Введіть логін:");

// Виводимо введений логін у консоль
console.log("Введено логін:", login);

// Перевіряємо логін
if (login === "Адмін") {
  // Якщо логін правильний, запитуємо пароль
  let password = prompt("Введіть пароль:");

  // Перевіряємо пароль
  if (password === "Я головний") {
    alert("Добрий день!");
  } else if (password === null || password === "") {
    alert("Скасовано");
  } else {
    alert("Невірний пароль!");
  }

} else if (login === null || login === "") {
  alert("Скасовано");
} else {
  alert("Я вас не знаю");
}

// Завдання 6
let i = 0;

while (i <= 20) {
  console.log(i);
  i++;
}

// Завдання 7
function getNumbers(min, max) {
    let sumEven = 0;
  
    // Виводимо числа від max до min за спаданням
    for (let i = max; i >= min; i--) {
      console.log(i);
  
      // Якщо число парне — додаємо до суми
      if (i % 2 === 0) {
        sumEven += i;
      }
    }
  
    // Повертаємо суму парних чисел
    return sumEven;
  }
  
  // Приклад виклику функції
  let result = getNumbers(3, 10);
console.log("Сума парних чисел:", result);
  
// Завдання 8

function min(a, b) {
    // Перевірка, чи обидва аргументи є числами
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Not a number!';
    }
  
    // Повертаємо менше з двох чисел
    return a < b ? a : b;
  }
  
  // Приклади виклику
  console.log(min(5, 10));     // 5
  console.log(min(15, 3));     // 3
  console.log(min('5', 10));   // Not a number!
  console.log(min(7, null));   // Not a number!
  
// Завдання 9
  
  function isAdult(age) {
    // Перевіряємо, чи age є числом
    if (typeof age !== 'number') {
      return false; // або можна повернути 'Invalid input'
    }
  
    // Якщо вік >= 18 — повертаємо true
    if (age >= 18) {
      return true;
    } else {
      // Інакше — запитуємо підтвердження у користувача
      return confirm("Вам менше 18. Ви впевнені, що хочете продовжити?");
    }
  }
  
  // Приклади виклику
  console.log(isAdult(20)); // true
console.log(isAdult(16)); // залежить від відповіді користувача на confirm
  
// Завдання 10

function fizzBuzz(num) {
    // Перевірка, що введене значення — число
    if (typeof num !== 'number' || num < 1) {
      console.log("Введіть число більше або рівне 1");
      return;
    }
  
    // Цикл від 1 до num
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
      } else if (i % 3 === 0) {
        console.log('fizz');
      } else if (i % 5 === 0) {
        console.log('buzz');
      }
    }
  }
  
  // Приклад виклику:
  fizzBuzz(15);