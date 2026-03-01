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
    document.querySelector('input[name="natural_alkohol"]').value = Number(document.querySelector('input[name="oechsle"]').value) * 1.25 - Number(document.querySelector('input[name="extract"]').value) * 0.5;
}