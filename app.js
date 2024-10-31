const text = ['Software Enginner', 'Web Developer', 'Web Designer', 'Tech Enthusiast', "Lifelong Learner"];

let index = 0

function changeText() {
    const element = document.getElementById("changing-texts");
    element.textContent = text[index];
    index = (index + 1) % text.length;

}

setInterval(changeText, 3000);