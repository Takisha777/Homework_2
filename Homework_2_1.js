// Пользователь вводит число. Если число не трехзначное вывести ошибку.
//     Определить:
// - Является ли четной сумма его цифр
// - Определить кратна ли 5 его сумма цифр
// - Определить является ли его произведение цифр больше 100
// - Верно ли, что все его цифры одинаковые
// - Есть ли среди цифр одинаковые
// Вывести только правдивые условия с помощью document.write.
//     В формате:
// ----------------------
//     Сумма цифр числа *число* четная.
//     Все цифры числа *число* одинаковые.
// ----------------------

let numberUser = +prompt('Введите трех значное число:');
if (1000 - numberUser > 0 && numberUser - 99 >0 ) {
    let tempVar1 = Math.trunc(numberUser/100);
    let tempVar2 = Math.trunc(numberUser/10-tempVar1*10);
    let tempVar3 = Math.trunc(numberUser-tempVar1*100-tempVar2*10);

    // - Является ли четной сумма его цифр
    let tempVar = (tempVar1 + tempVar2 + tempVar3)%2;
    if (tempVar === 0) {
        document.writeln('Сумма цифр числа ' + numberUser + ' четная. <br>') ;
    }

    // - Определить кратна ли 5 его сумма цифр
    tempVar = (tempVar1 + tempVar2 + tempVar3)%5;
    if (tempVar === 0) {
        document.writeln('Сумма цифр числа ' + numberUser + ' кратна 5. <br>')
    }

    // - Определить является ли его произведение цифр больше 100
    tempVar = tempVar1 * tempVar2 * tempVar3;
    if (tempVar > 100) {
        document.writeln('Произведение цифр ' + numberUser + ' больше 100.<br>')
    }

    // - Верно ли, что все его цифры одинаковые
    if (tempVar1 === tempVar2 && tempVar1 === tempVar3 && tempVar2 === tempVar3){
        document.writeln('Все цифры числа ' + numberUser + ' одинаковые.<br>')
    }

    // - Есть ли среди цифр одинаковые
    if (tempVar1 === tempVar2 || tempVar2 === tempVar3 || tempVar1 === tempVar3) {
        document.writeln('Среди цифр числа ' + numberUser + ' есть одинаковые.<br>')
    }
} else {
    alert("Вы ввели не верное число.");
}
