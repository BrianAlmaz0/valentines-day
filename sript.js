console.log("Script is running!");

document.getElementById("yes").addEventListener("click", function() {
    alert("Yay! Can't wait! 💘");
});

document.getElementById("no").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;

    console.log("Script is running!");
});
