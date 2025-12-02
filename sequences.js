/* ====================================================== */
/*                     BOOT SEQUENCE                      */
/* ====================================================== */

// Boot splash fades automatically via CSS (fadeOut animation)



/* ====================================================== */
/*                    LOGIN SCREEN                        */
/* ====================================================== */

// Real-time login clock
setInterval(() => {
    const now = new Date();
    document.getElementById("loginClock").innerText =
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}, 1000);

// Login handler
document.getElementById("loginBtn").onclick = () => {
    const pass = document.getElementById("passwordInput").value;

    if (pass.trim() === "") return; // simple lock
    document.getElementById("loginScreen").style.display = "none";

    notify("Welcome to Ubuntu 25.04 Simulator!");
};



/* ====================================================== */
/*                        TOP BAR CLOCK                   */
/* ====================================================== */

setInterval(() => {
    document.getElementById("clock").innerText =
        new Date().toLocaleTimeString();
}, 1000);



/* ====================================================== */
/*                   NOTIFICATION SYSTEM                  */
/* ====================================================== */

function notify(msg) {
    const n = document.getElementById("notifyBox");
    n.innerText = msg;
    n.style.opacity = 1;

    setTimeout(() => {
        n.style.opacity = 0;
    }, 2500);
}



/* ====================================================== */
/*                 WORKSPACE OVERLAY (F9)                 */
/* ====================================================== */

document.addEventListener("keydown", (e) => {
    if (e.key === "F9") {
        const ws = document.getElementById("workspaceOverlay");
        ws.classList.toggle("hidden");
    }
});



/* ====================================================== */
/*                 TERMINAL & COMMANDS                    */
/* ====================================================== */

const termOutput = document.getElementById("terminalOutput");
const termInput = document.getElementById("terminalInput");

termInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const cmd = termInput.value.trim();
        runCommand(cmd);
        termInput.value = "";
    }
});

function print(text) {
    termOutput.innerHTML += text + "<br>";
    termOutput.scrollTop = termOutput.scrollHeight;
}

function runCommand(cmd) {
    print("> " + cmd);

    /* ----- BASIC COMMANDS ----- */
    switch (cmd) {
        case "help":
            print("Commands: help, clear, neofetch, version, exit, apt, date");
            return;

        case "neofetch":
            print(`
Ubuntu 25.04 (Lunar Lynx)
Kernel: 6.8.0-sim
GNOME: 47.1
CPU: Virtual Core
Memory: Simulated
`);
            return;

        case "clear":
            termOutput.innerHTML = "";
            return;

        case "version":
            print("Ubuntu 25.04 Web Simulator v1.0");
            return;

        case "date":
            print(new Date().toString());
            return;

        case "exit":
            document.getElementById("terminalWindow").classList.add("hidden");
            return;
    }


    /* ----- APT PACKAGE MANAGER ----- */
    if (cmd.startsWith("apt")) {
        if (cmd === "apt update") {
            print("Updating package lists...");
            setTimeout(() => print("Done."), 1000);
        }

        else if (cmd.startsWith("apt install")) {
            const pkg = cmd.split(" ")[2];
            if (!pkg) return print("Specify a package.");

            print(`Installing ${pkg}...`);
            setTimeout(() => print(`${pkg} installed (simulated).`), 1500);
        }

        else if (cmd.startsWith("apt remove")) {
            const pkg = cmd.split(" ")[2];
            if (!pkg) return print("Specify a package.");

            print(`Removing ${pkg}...`);
            setTimeout(() => print(`${pkg} removed (simulated).`), 1500);
        }

        else if (cmd.startsWith("apt search")) {
            print("Searching package database...");
            setTimeout(() => print("Found 0 matching packages (sim)."), 800);
        }

        else {
            print("Unknown apt command.");
        }

        return;
    }

    /* ----- UNKNOWN CMD ----- */
    print("Unknown command: " + cmd);
}



/* ====================================================== */
/*                   BROWSER SIMULATION                   */
/* ====================================================== */

const browserBar = document.getElementById("browserBar");
const browserFrame = document.getElementById("browserFrame");

browserBar.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const url = browserBar.value;

        // Fake web navigation
        browserFrame.src =
            "https://example.com/?query=" + encodeURIComponent(url);

        notify("Opening: " + url);
    }
});
