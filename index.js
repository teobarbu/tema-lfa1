function verificaExpresii() {
    var pattern = document.getElementById('pattern').value;
    var text1 = document.getElementById('text1').value;
    var text2 = document.getElementById('text2').value;
    var rezultat = document.getElementById('rezultat');

    // Verificare dacă pattern-ul este valid
    try {
        new RegExp(pattern);
    } catch (e) {
        rezultat.innerHTML = "Pattern invalid!";
        return;
    }

    // Verificare dacă text1 are match cu pattern-ul
    var patternRegex = new RegExp(pattern);
    if (patternRegex.test(text1)) {
        rezultat.innerHTML = "Textul 1 are un match cu pattern-ul.";
    } else {
        rezultat.innerHTML = "Textul 1 nu are un match cu pattern-ul.";
    }

    // Extrage din text2 toate stringurile care îndeplinesc pattern-ul și le afișează
    var matches = text2.match(new RegExp(pattern, 'g'));
    if (matches) {
        rezultat.innerHTML += "<br>Stringurile din textul 2 care îndeplinesc pattern-ul:";
        for (var i = 0; i < matches.length; i++) {
            rezultat.innerHTML += "<br>" + matches[i];
        }
    } else {
        rezultat.innerHTML += "<br>Nu există stringuri în textul 2 care îndeplinesc pattern-ul.";
    }
}
