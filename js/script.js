alert('Дарова!');
alert('Вы должны будете ввести колво гласных в предложении, которое скоро выйдет...');

var poem = ['Несколько лет тому назад...', 'В одном из своих поместий...', 'Жил старинный русский барин...', 'Кирила Петрович Троекуров...', 'Смотри ЖОЖО для просвящения!'];

function poemRand(poem) {
    var rand = Math.floor(Math.random() * poem.length);
    return poem[rand];
}

function vowels() {
    var num = 0;
    var search = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
    var str = poemRand(poem);
    for (var i = 0; i < str.length; i++)
        for (var j = 0; j < search.length; j++)
            if (str[i] === search[j]) {
                ++num;
                break;
            }
    return num ? num : "Net sovpadenyi";
}

const resVow = vowels();

var total = [];

for (let i = 0; i < 5; i++) {
    alert(poemRand(poem));
    var answer = +prompt('Введите количество гласных: ');
    if (answer > vowels()) {
        var info = 'Неправильно!'
        alert(info);
        alert('Правильный ответ: ' + vowels());
        console.log(total.push(info + ' | '));
    } else {
        var info2 = 'Правильно!';
        alert(info2);
        console.log(total.push(info2 + ' | '));
    }
}

console.log(total);