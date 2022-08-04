

window.onload = (event) => {
    console.log("Loaded");

    const welcomeText = document.createElement("p");
    const audio = new Audio("images/startup.mp3");

    document.getElementById("enterButton").onclick = function() {
        document.getElementById("enterButton").style.animation="disappear 0.5s linear 1 forwards";
        setTimeout(() => {
            document.body.style.animation="backgroundColorChangeBack 0.5s linear 1 forwards";
            document.body.removeChild(welcomeText);
            document.getElementById("enterButton").remove();
            document.getElementById("nameText").style.animation="nameAppear 0.5s linear 1 forwards";
            document.getElementById("belowName").style.animation="nameAppear 0.5s linear 1 forwards";
        }, 10000);
        setTimeout(() => {
            document.body.style.animation="backgroundColorChange 0.5s linear 1 forwards";
            welcomeText.innerHTML = "Getting things ready...";
            welcomeText.style.color = "var(--clr-neon)";
            welcomeText.style.marginTop = "-70vh";
            welcomeText.style.fontSize = "200%";
            document.body.appendChild(welcomeText)
            setTimeout(() => {
                welcomeText.style.animation="fadeout 1s linear 1 forwards";
                setTimeout(() => {
                    welcomeText.innerHTML = "Welcome.";
                    welcomeText.style.animation="fadein 1s linear 1 forwards";
                    audio.play();
                    setTimeout(() => {
                        window.location.href = "home/home.html"
                    }, 3500);
                }, 1000);
            }, 5000);
        }, 500);
    }
}
