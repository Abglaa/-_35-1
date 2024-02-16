// part-1
function getShortName(surname, firstName, middleName) {
    const firstNameInitial = firstName.charAt(0);
    const middleNameInitial = middleName.charAt(0);

    const shortName = `${surname} ${firstNameInitial}.${middleNameInitial}.`;

    return shortName;
}

const shortName = getShortName("Бекова", "Айдана", "Бековна");
console.log(shortName); 

//part-2

function booksFilter(...books) {
    const uBooks = []
    const otherBooks = []

    for (const book of books){
        if (book.includes('у')){
            uBooks.push(book)
        }else {
            otherBooks.push(book)
        }
    }

    console.log('книги с буквой у',uBooks)
    console.log('остальные книги', otherBooks)

}

booksFilter('Война и мир', 'богатый папа', 'думай и богатей', 'Спеши любить', 'Оно', 'песнь льда и пламени','Внучка','Настройщик','Любовь, смерть и клубника ','Гордость и предубеждение','Мастер и Маргарита','Маленький принц','Портрет Дориана Грея','Hello world','У'.toLowerCase())


//part-3

const users = [
    { name: "Алексей", birthDate: "19.09.2009" },
    { name: "Мария", birthDate: "09.08.1989" },
    { name: "Иван", birthDate: "02.12.1996" },
    { name: "Елена", birthDate: "29.05.2008" },
    { name: "Aйдана", birthDate: "10.02.2001" }
];

users.forEach(user => {
    console.log(`Пользователь ${user.name} родился ${user.birthDate}`);
});

//part-4 

function isPalindrome(str) {
    const string = str.toLowerCase();

    let stringWithoutSpaces = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            stringWithoutSpaces += string[i];
        }
    }

    const length = stringWithoutSpaces.length;
    for (let i = 0; i < length / 2; i++) {
        if (stringWithoutSpaces[i] !== stringWithoutSpaces[length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("привет"));
