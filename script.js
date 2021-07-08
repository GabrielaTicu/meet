function onClick(id) {
    var n = document.getElementById(id).text;
    n = Number(n);
    n++;
    document.getElementById(id).innerHTML = n;
}
