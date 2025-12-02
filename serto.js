document.getElementById("browserBar").addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const url = document.getElementById("browserBar").value;
        document.getElementById("browserFrame").src =
            "https://example.com/?q=" + encodeURIComponent(url);
    }
});
