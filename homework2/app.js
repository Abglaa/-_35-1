

function result(num) {
    let rim = ""

    switch (num) {
        case 1:
            rim = "I";
            break;
        case 2:
            rim= "II";
            break;
        case 3:
            rim= "III";
            break;
        case 4:
            rim= "IV";
            break;
        case 5:
            rim= "V";
            break;
        case 6:
            rim= "VI";
            break;
        case 7:
            rim= "VII";
            break;
        case 8:
            rim = "VIII";
            break;
        case 9:
            rim= "IX";
            break;
        case 10:
            rim= "X";
            break;
        case 11:
            rim= "XI";
            break;
        case 12:
            rim = "XII";
            break;
        case 13:
            rim= "XIII";
            break;
        case 14:
            rim= "XIV";
            break;
        case 15:
            rim= "XV";
            break;
        default:
            console.log("Введите число от 1 до 15.");
            return;
    }

    console.log(num + " -> " + rim);
}
result(8)