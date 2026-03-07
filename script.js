// Make the Lösungsweg box for vertical scroll on phone go away if the button hasn't been pressed yet
function show_formula() {
    document.getElementsByClassName("hidden_formula")[0].style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {

    document.head.insertAdjacentHTML('beforeend', `
        <link rel="icon" type="image/x-icon" href="https://github.com/simon10247/wein-formeln/blob/main/faviconWeinFormeln.png?raw=true">
        <meta author="simon102">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta charset="UTF-8">
        `)

    const box = document.getElementById("navigation_bar_injection");
    // Inject the navigation bar into .html
    box.innerHTML = `
        <ul class="navigation_bar_ul">
            <li class="navigation_bar_left"><img src="https://github.com/simon10247/wein-formeln/blob/main/faviconWeinFormeln.png?raw=true" alt="A wine bottle with a math formular" style="width: 40px; padding-top: 10px;"></li>
            <li class="navigation_bar_left" style="font-weight: bold; font-size: 22px;"><a href="" style="pointer-events: none;">Wein-Formeln.de</a></li>
            <li class="navigation_bar_break"></li>
            <li class="navigation_bar_left"><a href=""><img class="navigation_bar_icon" src="icons/home.png" alt="Home Icone">Home</a></li>
            <li class="navigation_bar_left navigation_bar_dropdown">
                <a href=""><img class="navigation_bar_icon" src="icons/math.png" alt="Calculation Icone">Formeln</a>
                <ul class="navigation_bar_dropdown_content">
                    <li><a href="">Natürlicher Alkohol</a></li>
                    <li><a href="">Anreicherung</a></li>
                    <li><a href="">[Drittes Thema hier]</a></li>
                </ul>
            </li>
            <li class="navigation_bar_left"><a href=""><img class="navigation_bar_icon" src="icons/mail.png" alt="Envelope Icone">Kontakte</a></li>
            <li class="navigation_bar_right"><a href=""><img class="navigation_bar_icon" src="icons/menu.png" alt="Menu Icone"></a></li>
        </ul>`;

    document.querySelectorAll('.input_span').forEach((inputSpan) => {   // A kind of class to add attributes to the span
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