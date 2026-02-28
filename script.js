function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ 
        behavior: "smooth" 
    });
}

function showMessage() {
    alert("Thank you for contacting Angelica Arty! 💖 We will respond soon.");
}

const elements = document.querySelectorAll(".hidden");

function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.8;

    elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);

const text = "Creative Art & Creative Design";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.querySelector(".typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}

window.onload = typeEffect;