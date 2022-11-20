window.onload = (event) => {
    document.getElementById("nameHeader").style.animation="nameAppear 0.5s linear 1 forwards";
    document.getElementById("belowName").style.animation="nameAppear 0.5s linear 1 forwards";
    document.getElementById("learnMore").style.animation="nameAppear 0.5s linear 1 forwards";

    document.getElementById("learnMore").onclick = function() {
        document.getElementById("aboutmeInfo").scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    }

    window.addEventListener('scroll', function() {
        if(window.scrollY > 100) {
            document.getElementById("aboutMeContainer").style.animation="fadein 2s forwards";
        }
        console.log(window.scrollY)
    });


    window.addEventListener('scroll', function() {
        if(window.scrollY > 1150) {
            document.getElementById("project1").style.animation="fadein 2s forwards";
        }
        
    });

    window.addEventListener('scroll', function() {
        if(window.scrollY > 1953) {
            document.getElementById("contactMe").style.animation="fadein 2s forwards";
        }
        
    });


    centerBox = document.getElementById("project1image")

    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        event = event || window.event;

        sensitivity = 0.005;
        
        mouseX = event.clientX;
        mouseY = event.clientY;

        offsetX = mouseX * sensitivity;
        offsetY = mouseY * sensitivity;

        centerBox.style.transform = `translateX(-${offsetX}px) translateY(-${offsetY}px)`
    }




}

// Test