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

// Calculate the natural alkohol
function calculateNaturalAlkohol() {
    document.getElementById('natural_alkohol').innerText = Number(document.getElementById('oechsle').innerText) * 1.25 - Number(document.getElementById('extract').innerText) * 0.5;
}