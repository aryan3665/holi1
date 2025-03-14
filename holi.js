
document.getElementById("wishBtn").addEventListener("click", function () {
    let name = document.getElementById("nameInput").value.trim();
    let wishMessage = document.getElementById("wishMessage");

    if (name) {
        wishMessage.innerHTML = `Happy Holi, <span style="color:PURPLE;">${name}</span>! 🌸🎨<br> May your life be filled with colors of happiness!`;
    } else {
        wishMessage.innerHTML = "Please enter your name to receive a special Holi wish!";
    }
});

// let music = document.getElementById("holiMusic");

// document.getElementById("playMusic").addEventListener("click", function () {
//     if (music.paused) {
//         music.play();
//         this.innerText = "Pause Music";
//     } else {
//         music.pause();
//         this.innerText = "Play Holi Music";
//     }
// });



document.body.addEventListener("click", function (event) {
    let colors = ["#FF5733", "#FFBD33", "#33FF57", "#33D4FF", "#FF33A1", "#A833FF", "#FF3366"];
    
   
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];


    let splash = document.createElement("div");
    splash.style.position = "absolute";
    splash.style.left = `${event.clientX}px`;
    splash.style.top = `${event.clientY}px`;
    splash.style.width = "30px";
    splash.style.height = "30px";
    splash.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    splash.style.borderRadius = "50%";
    splash.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
    splash.style.animation = "fadeOut 1s ease-out forwards";

    document.body.appendChild(splash);

    setTimeout(() => {
        splash.remove();
    }, 1000);
});
