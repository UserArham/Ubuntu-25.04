function openTerminal() {
    document.getElementById("terminalWindow").classList.remove("hidden");
    document.getElementById("terminalInput").focus();
}

function openAbout() {
    document.getElementById("aboutWindow").classList.remove("hidden");
}

function closeWindow(id) {
    document.getElementById(id).classList.add("hidden");
}
