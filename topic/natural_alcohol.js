function calculation() {
    let oechsle = document.getElementById('oechsle').innerText;
    let extract = document.getElementById('extract').innerText;
    let naturalAlkohol;

    let useComma = containsComma(oechsle) || containsComma(extract);
    oechsle = commaToDot(oechsle);
    extract = commaToDot(extract);

    naturalAlkohol = oechsle * 1.25 - extract * 0.5;

    let naturalAlkoholText;
    if (isNaN(naturalAlkohol)) {
        naturalAlkoholText = "Womp Womp";
    } else {
        naturalAlkoholText = String(naturalAlkohol);
        if (useComma) {
            naturalAlkoholText = naturalAlkoholText.replace(".", ",");
        }
    }

    document.getElementById('natural_alkohol').innerText = naturalAlkoholText;
}
