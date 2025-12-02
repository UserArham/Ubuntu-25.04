// Makes windows draggable
document.querySelectorAll(".window").forEach(win => {
    const header = win.querySelector(".windowHeader");
    let offsetX = 0, offsetY = 0, dragging = false;

    header.addEventListener("mousedown", e => {
        dragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
        win.style.zIndex = 1000;
    });

    document.addEventListener("mouseup", () => dragging = false);

    document.addEventListener("mousemove", e => {
        if (!dragging) return;
        win.style.left = (e.clientX - offsetX) + "px";
        win.style.top = (e.clientY - offsetY) + "px";
    });
});
