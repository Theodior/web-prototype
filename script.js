/*Arrowmenu*/
window.addEventListener("load", afleveringVises);


function afleveringVises() {
    console.log("afleveringVises");

    document.querySelector("#arrowknap").addEventListener("click", toggleArrowMenu);


}


function toggleArrowMenu() {
    console.log("toggleArrowMenu");
    document.querySelector("#arrowmenu").classList.toggle("hidden");

    let erSkjult =
        document.querySelector("#arrowmenu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#arrowknap").textContent = "▼";
    } else {
        document.querySelector("#arrowknap").textContent = "▲";
    }
}
