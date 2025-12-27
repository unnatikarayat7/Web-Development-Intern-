function generateBackground() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const color3 = document.getElementById("color3").value;
    const direction = document.getElementById("direction").value;

    const gradient = `linear-gradient(${direction}, ${color1}, ${color2}, ${color3})`;
    document.getElementById("body").style.background = gradient;
}

// Random color generator (safe 6-digit hex)
function randomColors() {

    function getRandomColor() {
        return "#" + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0");
    }

    document.getElementById("color1").value = getRandomColor();
    document.getElementById("color2").value = getRandomColor();
    document.getElementById("color3").value = getRandomColor();

    generateBackground();
}

// Default + live preview
generateBackground();
document.getElementById("color1").addEventListener("input", generateBackground);
document.getElementById("color2").addEventListener("input", generateBackground);
document.getElementById("color3").addEventListener("input", generateBackground);
document.getElementById("direction").addEventListener("change", generateBackground);
