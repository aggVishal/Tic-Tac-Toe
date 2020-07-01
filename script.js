var flag = 0;
var arr = [
    ['a', 'b', 'c'],
    ['f', 'e', 'd'],
    ['g', 'h', 'i']
];
var isClicked = {
    "f00": false,
    "f01": false,
    "f02": false,
    "f10": false,
    "f11": false,
    "f12": false,
    "f20": false,
    "f21": false,
    "f22": false

}
function hello() {
    alert('Player ' + (1 + min % 2) + " Won");
    isClicked["f00"] = true;
    isClicked["f01"] = true;
    isClicked["f02"] = true;
    isClicked["f10"] = true;
    isClicked["f11"] = true;
    isClicked["f12"] = true;
    isClicked["f20"] = true;
    isClicked["f21"] = true;
    isClicked["f22"] = true;
}
function isClickedBefore(i, j) {
    var s = "f" + i + j;
    if (isClicked[s] == false) {
        isClicked[s] = true;
        entry(i, j);
    }
}
var min = 1;
function entry(i, j) {
    min++;

    if (flag == 0) {
        arr[i][j] = 'X';
        document.getElementById('f' + i + j).style.backgroundColor = 'black';

        flag++;
    }
    else {
        arr[i][j] = 'O';
        document.getElementById('f' + i + j).style.backgroundColor = 'grey';

        flag--;
    }

    if (min >= 6)
        check();
}
function check() {
    var check_var = 0;
    for (var k = 0; k < 3; k++) {

        for (var m = 0; m < 2; m++) {
            if (arr[k][m] == arr[k][m + 1])
                check_var++;
            else
                break;
        }
        if (check_var == 2) {
            setTimeout(hello, 100);
            return;
        }
        else
            check_var = 0;
    }
    for (var k = 0; k < 3; k++) {

        for (var m = 0; m < 2; m++) {
            if (arr[m][k] == arr[m + 1][k])
                check_var++;
            else
                break;
        }
        if (check_var == 2) {

            setTimeout(hello, 100);
            return;
        }
        else
            check_var = 0;
    }
    var default_check = arr[1][1];
    if (arr[0][0] == default_check && arr[2][2] == default_check || arr[2][0] == default_check && arr[0][2] == default_check) {
        setTimeout(hello, 100);
        return;
    }
    else if (min == 10)
        setTimeout(gameover, 100);
    return;

}
function gameover() {
    alert("Game Over");
}