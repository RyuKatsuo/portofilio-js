document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-dark-mode");
    const html = document.documentElement;

    
    if (localStorage.getItem("theme") === "light") {
        html.setAttribute("data-theme", "light");
        toggleBtn.classList.replace("fa-toggle-off", "fa-toggle-on");
    }

    // Toggle Mode Saat Diklik
    toggleBtn.addEventListener("click", function () {
        if (html.getAttribute("data-theme") === "light") {
            html.setAttribute("data-theme", "dark");
            toggleBtn.classList.replace("fa-toggle-on", "fa-toggle-off");
            localStorage.setItem("theme", "dark");
        } else {
            html.setAttribute("data-theme", "light");
            toggleBtn.classList.replace("fa-toggle-off", "fa-toggle-on");
            localStorage.setItem("theme", "light");
        }
    });
})

window.onload = function () {
    var i = 0;
    var txt = "Passionate Full Stack Developer specializing in Laravel and React";
    var speed = 100;
    var eraseSpeed = 50; 
    var delayBeforeErase = 1500;
    var description = document.getElementById("description");
    var isTyping = true;

    function typeWriter() {
        if (isTyping) {
            if (i < txt.length) {
                description.innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                isTyping = false;
                setTimeout(typeWriter, delayBeforeErase);
            }
        } else {
            if (i > 0) {
                description.innerHTML = txt.substring(0, i - 1);
                i--;
                setTimeout(typeWriter, eraseSpeed);
            } else {
                isTyping = true;
                setTimeout(typeWriter, speed);
            }
        }
    }

    typeWriter();
};


