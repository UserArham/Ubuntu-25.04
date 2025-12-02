/* ========================= */
/*      APP LAUNCHERS        */
/* ========================= */

// ---- TERMINAL ----
function openTerminal() {
    const win = document.getElementById("terminalWindow");
    win.classList.remove("hidden");
    document.getElementById("terminalInput").focus();
}

// ---- ABOUT ----
function openAbout() {
    const win = document.getElementById("aboutWindow");
    win.classList.remove("hidden");
}

// ---- FILES ----
function openFiles() {
    const win = document.getElementById("filesWindow");
    win.classList.remove("hidden");
}

// ---- BROWSER ----
function openBrowser() {
    const win = document.getElementById("browserWindow");
    win.classList.remove("hidden");
}

// ---- SETTINGS ----
function openSettings() {
    const win = document.getElementById("settingsWindow");
    win.classList.remove("hidden");
}


/* ========================= */
/*      WINDOW CONTROL       */
/* ========================= */

function closeWindow(id) {
    document.getElementById(id).classList.add("hidden");
}
