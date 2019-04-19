
var a = prompt('a =');
var b = prompt('b =');
var c = prompt('c =');
var d
var x1
var x2
var x

function squareEq(a, b, c, d, x1, x2, x) {

    d = (Math.pow(b, 2)) + 4 * a * c
    alert('Дискриминант' + " = " + d)

    if (d > 0) {

        alert('Дискриминант > 0, два корня');
        x1 = ((Math.abs(b) + Math.sqrt(d)) / (2 * a));
        x2 = ((Math.abs(b) - Math.sqrt(d)) / (2 * a));
        alert('x1' + ' = ' + x1);
        alert('x2' + ' = ' + x2);

    } else if (d == 0) {

        alert('Дискриминант = 0, один корень');
        x = (Math.abs(b) / (2 * a));
        alert('x' + ' = ' + x);

    } else if (d < 0) {

        alert('Нет корней');

    }

}


squareEq(a, b, c, d, x1, x2, x)
