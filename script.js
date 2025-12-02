// Update Clock
setInterval(() => {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}, 1000);

// Terminal Behavior
const output = document.getElementById("terminalOutput");
const input = document.getElementById("terminalInput");

input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const cmd = input.value.trim();
        runCommand(cmd);
        input.value = "";
    }
});

function print(text) {
    output.innerHTML += text + "<br>";
    output.scrollTop = output.scrollHeight;
}

function runCommand(cmd) {
    print("> " + cmd);

    switch (cmd) {
        case "help":
            print("Commands: help, neofetch, clear, version, exit");
            break;
        
        case "neofetch":
            print(`
Ubuntu 25.04 (Lunar Lynx)
Kernel: 6.8.0-sim
GNOME: 47.1
Memory: 8GB (virtual)
CPU: Simulated`)
            break;

        case "clear":
            output.innerHTML = "";
            break;

        case "version":
            print("Ubuntu 25.04 Simulator v1.0");
            break;

        case "exit":
            document.getElementById("terminalWindow").classList.add("hidden");
            break;

        default:
            print("Unknown command: " + cmd);
    }
}
