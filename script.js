function show_formula() {
    document.getElementsByClassName("hidden_formula")[0].style.display = "block";
}

function calculateNaturalAlkohol() {
    document.querySelector('input[name="natural_alkohol"]').value = Number(document.querySelector('input[name="oechsle"]').value) * 1.25 - Number(document.querySelector('input[name="extract"]').value) * 0.5;
}