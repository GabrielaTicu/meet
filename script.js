function onClick(id) {
    var n = document.getElementById(id).nodeValue;
    n = Number(n);
    n++;
    document.getElementById(id).innerHTML = n;
}