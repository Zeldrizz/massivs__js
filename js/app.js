alert('Для добавления элемента - команда add, для удаления - del, для завершения программы - stop.');

do {
    var command = prompt('Для добавления элемента - команда add.');
} while (command != 'add');

let dungeon = [];

if (command == 'add') {
    do {
        var info = prompt('Введите то, что хотели добавить, для завершения введите - stop, для удаления последнего элемента - del.');
        dungeon.push(info);
    } while (info != 'stop' && info != 'del');
    if (info == 'del') {
        do {
            var quest = prompt('Вы точно хотите удалить последний элемент? Нажмите Ок для подтверждения удаления элемента. Для завершения операции - stop.');
            dungeon.pop(info);
        } while (quest != 'stop');
    }
} else {
    alert('Нужно добавить команду!');
}

console.log('Весь результат:');

for (let i = 0; i < dungeon.length; i++) {
    console.log('Вы ввели: ' + dungeon[i] + '.');
}