// Login clock
setInterval(() => {
    document.getElementById("loginClock").innerText =
        new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}, 1000);

// Login button
document.getElementById("loginBtn").onclick = () => {
    const pass = document.getElementById("passwordInput").value;
    if (pass === "") return;

    document.getElementById("loginScreen").style.display = "none";
};
