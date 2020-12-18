
var height = prompt('Укажите высоту елочки');
var holder ="";

    for (var i = 0; i < height; i++) {
        for ( var spase = 0; spase < height - i; spase++) holder += " ";
        for ( var star = 0; star < 2 * i + 1; star++) holder += "*";
        holder += "\n";
    }

alert(holder);