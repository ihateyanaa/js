// Задание 1
// alert('Я JavaScript!')

// Задание 2
// let name = 'Иван';
// let admin = name;
// alert(admin);

// Задание 3
// let name = 'Ilya';
// alert(`hello ${1}`);
// alert(`hello ${'name'}`)
// alert(`hello ${name}`)

// Задание 4
// let name;
// name = prompt('Как тебя зовут?');
// alert (name);

// Задание 5
// let a = 1;
// let b = 1;
// let c = ++a;
// let d = b++; 
// alert (a)
// alert (b)
// alert (c)
// alert (d)

// Задание 6
// let a = 2;
// let x = 1 + (a *= 2);
// alert(a);
// alert(x);

// Задание 7
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// a = Number(a);
// b = Number(b);
// alert(a + b);

// Задание 8
// a = 7 > 5
// b = "стол" > "стул"
// c = "4" > "52"
// d = undefined == null
// e = undefined === null
// f = null == "\n0\n"
// g = null === +"\n0\n"
// alert(a)
// alert(b)
// alert(c)
// alert(d)
// alert(e)
// alert(f)
// alert(g)

// Задание 9
// if ("0") {
//     alert( 'Привет' );
// }

// Задание 10
// let a;
// a = prompt('Какое "официальное" название JavaScript');
// if (a == 'ECMAScript') {
//     alert('Верно');
// } else {
//     alert('Не знаете? ECMAScript');
// }

// Задание 11
// let a;
// a = prompt('Введите число')
// if (a > 0) {
//     alert('1')
// } else if (a < 0){
//     alert('-1')
// } else {
//     alert('0')
// }

// Задание 12
// let a;
// a = prompt('Введи первое число')
// a = Number(a)
// let b;
// b = prompt('Введи второе число')
// b = Number(b)
// let result = (a + b < 4) ? 'Мало' : 'Много';
// alert(result)

// Задание 13
// let login;
// login = prompt('Введите Логин');
// let message = (login == 'Сотрудник') ? 'Привет' : 
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' : '';
// alert(message)

// Задание 14
// alert( null || 4 || undefined );

// Задание 15
// alert( alert(1) || 2 || alert(3) );

// Задание 16
// alert( 1 && null && 2 );

// Задание 17
// alert( alert(1) && alert(2) );

// Задание 18
// alert( null || 2 && 3 || 4 );

// Задание 19
// let value = NaN;
// value &&= 10;
// value ||= 20;
// value &&= 30;
// value ||= 40;
// alert(value);

// Задание 20
// let pers;
// let age;
// age = prompt('Введи число')
// if (age >= 14 && age <= 90){
//     pers = 'ДА';
// } else {
//     pers = 'НЕТ';
// }
// alert(pers)

// Задание 21
// let pers;
// let age;
// age = prompt('Введи число')
// if (age >=! 17 && age <=! 99){
//     pers = 'ДА';
// } else {
//     pers = 'НЕТ';
// }
// alert(pers)

// Задание 22
// if (-1 || 0) alert( 'first' );//да
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );//да 

// Задание 23
// let message;
// let message2;
// let login;
// login = prompt('Введите логин');
// if (login == ''){
//     location.reload();
// }else if (login == 'Админ'){
//     let password;
//     password = prompt('Пароль');
//     if (password == 'Я Главный'){
//         message2 = 'Здравствуйте';
//         alert(message2);
//     } else if (password == 'Отмена'){
//         message2 = 'Отменено';
//         alert(message2); 
//     } else {
//         message2 = 'Неверный пароль';
//         alert(message2);
//     }
// } else if (login == 'Отмена'){
//     message = 'Отменено';
//     alert(message);
// } else {
//     message = 'Я вас не знаю';
//     alert(message);
    
// }
