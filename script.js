// Make the Lösungsweg box for vertical scroll on phone go away if the button hasn't been pressed yet
function show_formula() {
    document.getElementsByClassName("hidden_formula")[0].style.display = "block";
}

// A kind of class to add attributes to the span
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.input_span').forEach((inputSpan) => {
        inputSpan.setAttribute('inputmode', 'decimal');
        inputSpan.setAttribute('contenteditable', 'true');
    })
})

function commaToDot(text) {
    text = String(text);
    text = text.replace(",", ".");
    text = Number(text);
    return text;
}

// Calculate the natural alkohol
function calculateNaturalAlkohol() {
    
    let oechsle = document.getElementById('oechsle').innerText;
    let extract = document.getElementById('extract').innerText;
    let naturalAlkohol;

    oechsle = commaToDot(oechsle);
    extract = commaToDot(extract);

    naturalAlkohol = oechsle * 1.25 - extract * 0.5;

    naturalAlkohol = String(naturalAlkohol).replace(".", ",");

    document.getElementById('natural_alkohol').innerText = naturalAlkohol;

    // console.log("Oe:", oechsle);
    // console.log("E:", extract);
    // console.log("nA:", naturalAlkohol);

}