// Make the Lösungsweg box for vertical scroll on phone go away if the button hasn't been pressed yet
function show_formula() { // Normal function (Called by HTML code)
    document.getElementsByClassName("hidden_formula")[0].style.display = "block"; //Findes an element with this class and applys the style change
}

document.addEventListener("DOMContentLoaded", () => { // This code i executed, when the html page is finished loading

    // THEME STORAGE
    let savedTheme = localStorage.getItem('selectedTheme'); // Look into browser storage and saves "selectedTheme" into var
    if (savedTheme) { // If a saved theme exists
        setTheme(savedTheme); // Calles the setTheme function with the found/saved theme
    }

    // HEAD INJECTION
    document.head.insertAdjacentHTML('beforeend', `
        <link rel="icon" type="image/x-icon" href="https://github.com/simon10247/wein-formeln/blob/main/faviconWeinFormeln.png?raw=true">
        <meta author="simon102">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <meta charset="UTF-8">
        `)

    // NAVIGATION INJECTION
    let box = document.getElementById("navigation_bar_injection"); // Saves the div with the id in a var
    // Tells the div to contain this code
    box.innerHTML = `
        <ul class="navigation_bar_ul">
            <li class="navigation_bar_left"><img src="https://github.com/simon10247/wein-formeln/blob/main/faviconWeinFormeln.png?raw=true" alt="A wine bottle with a math formular" style="width: 40px; padding-top: 10px;"></li>
            <li class="navigation_bar_left" style="font-weight: bold; font-size: 22px;"><a href="" style="pointer-events: none;">Wein-Formeln.de</a></li>
            <li class="navigation_bar_break"></li>
            <li class="navigation_bar_left hide_on_phone"><a href=""><img class="navigation_bar_icon" src="icons/navigation_bar/home.png" alt="Home Icone">Home</a></li>
            <li class="navigation_bar_left navigation_bar_dropdown hide_on_phone">
                <a href=""><img class="navigation_bar_icon" src="icons/navigation_bar/math.png" alt="Calculation Icone">Formeln</a>
                <ul class="navigation_bar_dropdown_content">
                    <li><a href="">• Natürlicher Alkohol</a></li>
                    <li><a href="">• Anreicherung</a></li>
                    <li><a href="">• [Drittes Thema hier]</a></li>
                </ul>
            </li>
            <li class="navigation_bar_left hide_on_phone"><a href=""><img class="navigation_bar_icon" src="icons/navigation_bar/mail.png" alt="Envelope Icone">Kontakte</a></li>
            <li class="navigation_bar_left navigation_bar_dropdown show_on_phone"><a href=""><img class="navigation_bar_icon" src="icons/navigation_bar/menu.png" alt="Menu Icone"></a>
                <ul class="navigation_bar_dropdown_content">
                    <li class="navigation_bar_left"><a href=""><img class="navigation_bar_icon" src="icons/navigation_bar/home.png" alt="Home Icone">Home</a></li>
                    <li class="navigation_bar_left navigation_bar_dropdown"><a href=""><img class="navigation_bar_icon" src="icons/navigation_bar/math.png" alt="Calculation Icone">Formeln</a></li>
                    <li class="navigation_bar_left"><a href=""><img class="navigation_bar_icon" src="icons/navigation_bar/mail.png" alt="Envelope Icone">Kontakte</a></li>
                </ul>
            </li>
            <li class="navigation_bar_right navigation_bar_dropdown"><a href=""><img class="navigation_bar_icon" src="icons/navigation_bar/paintbrush.png" alt="Paintbrush Icone"></a>
                <ul class="navigation_bar_dropdown_content_right navigation_bar_dropdown_content">
                    <li><a href="javascript:void(0)" onclick="setTheme('light')">Light Theme</a></li>
                    <li><a href="javascript:void(0)" onclick="setTheme('dark')">Dark Theme</a></li>
                    <li><a href="javascript:void(0)" onclick="setTheme('purple')">Purple Theme</a></li>
                </ul>
            </li>
        </ul>`;

    // INJECT ATTRIBUTES INTO HTML SPANES
    document.querySelectorAll('.input_span').forEach((inputSpan) => {   // Finds all spans and allows them to be editable
        inputSpan.setAttribute('inputmode', 'decimal'); // Injects the attribute
        inputSpan.setAttribute('contenteditable', 'true'); // Also injects the attribute
    })

    // TURN DROPDOWN INTO A TOGGLE
    let dropdowns = document.querySelectorAll('.navigation_bar_dropdown'); // Selects all dropdowns and puts them into a var
    dropdowns.forEach(dropdown => { // Loops through each dropdown
        dropdown.addEventListener('click', function(event) { // Triggers function when dropdown is clicked
            let content = this.querySelector('.navigation_bar_dropdown_content'); // Finds the specific dropdown menu and puts it into a var
            event.preventDefault(); // Prevents the link from refreshing the page
            content.classList.toggle('show_dropdown'); // Toggles the CSS class that makes the menu visible
            dropdown.forEach(dropdown => { // Loops through all dropdowns
                if (other !== dropdown) { // Every dropdown that isn't the one we just clicked
                    other.querySelector('.navigation_bar_dropdown_content').classList.remove('show_dropdown'); // Hide the others (Not selected Dropdowns)
                }
            })
        })
    })
    window.addEventListener('click', (event) => { // Triggers when anything is clicked
        if (!event.target.closest('.navigation_bar_dropdown')) { // Check if the click was (not) on a dropdown element
            document.querySelectorAll('.navigation_bar_dropdown_content').forEach(menu => { // Loop through all dropdowns
                menu.classList.remove('show_dropdown'); // Close them
            })
        }
    })

})

function setTheme(theme) {
    let root = document.documentElement;
    localStorage.setItem('selectedTheme', theme);

    if (theme === "light") {
        root.style.setProperty('--main_background_color', '#eeeeee');
        root.style.setProperty('--secondary_background_color', '#ffffff');
        root.style.setProperty('--widget_color', '#413561');
        root.style.setProperty('--widget_hover_color', '#2b2341');
        root.style.setProperty('--widget_color_2', '#ab94e6');
        root.style.setProperty('--card_color', '#604d92');
        root.style.setProperty('--title_color', '#2b2341');
        root.style.setProperty('--text_color', '#ffffff');
    } else if (theme === "dark") {
        root.style.setProperty('--main_background_color', '#292929');
        root.style.setProperty('--secondary_background_color', '#494949');
        root.style.setProperty('--widget_color', '#303030');
        root.style.setProperty('--widget_hover_color', '#1b1b1b');
        root.style.setProperty('--widget_color_2', '#858585');
        root.style.setProperty('--card_color', '#494949');
        root.style.setProperty('--title_color', '#ffffff');
        root.style.setProperty('--text_color', '#ffffff');
    } else if (theme === "purple") {
        root.style.setProperty('--main_background_color', '#1E113F');
        root.style.setProperty('--secondary_background_color', '#2B1859');
        root.style.setProperty('--widget_color', '#180E33');
        root.style.setProperty('--widget_hover_color', '#06030C');
        root.style.setProperty('--widget_color_2', '#3C2180');
        root.style.setProperty('--card_color', '#0f0920');
        root.style.setProperty('--title_color', '#0000ffffff00');
        root.style.setProperty('--text_color', '#ffffff');
    }
}

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