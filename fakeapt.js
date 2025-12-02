// Fake APT
if (cmd.startsWith("apt")) {
    if (cmd === "apt update") {
        print("Fetching package lists...");
        setTimeout(() => print("Done."), 1000);
    }
    else if (cmd.startsWith("apt install")) {
        const pkg = cmd.split(" ")[2];
        print(`Installing ${pkg}...`);
        setTimeout(() => print(`${pkg} installed! (simulated)`), 1500);
    }
    else if (cmd.startsWith("apt remove")) {
        const pkg = cmd.split(" ")[2];
        print(`Removing ${pkg}...`);
        setTimeout(() => print(`${pkg} removed.`), 1500);
    }
    else if (cmd.startsWith("apt search")) {
        print("Searching package database...");
        setTimeout(() => print("Found 0 packages (sim)."), 800);
    }
    else {
        print("Unknown apt command.");
    }
    return;
}
