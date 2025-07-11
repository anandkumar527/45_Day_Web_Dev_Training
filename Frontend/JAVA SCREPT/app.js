let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    // console.log("Generate the random colour!");
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("colour updated!")
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 225);
    let green = Math.floor(Math.random() * 225);
    let blue = Math.floor(Math.random() * 225);

    let colour = `rgb(${red},${green},${blue})`;
    return colour;
}