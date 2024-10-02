let focus = document.querySelector(".partiinfo focus");
focus.addEventListener("mousemove", mousemove);
function mousemove(event) {
    focus.classList.remove("invis");
    let x = event.clientX;
    let y = event.clientY;
    focus.style.background = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, transparent, #000 20%)';
}
