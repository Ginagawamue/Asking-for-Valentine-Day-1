const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
let counter = 0;
let yesBtnSize = 18; 
let noBtnSize = 18;

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "hehe I knew it ⸜(｡˃ ᵕ ˂ )⸝♡";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDBna2lkYjFha3R1NzRwaTM0b3l6OWU2NmxzYzdhbGhkeWNiajllZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qca5DjHlDzhrW/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
});

const randomQuestions = [
    "Are you sure? (´･_･`)",
    "huuuuh (⌒_⌒;)",
    "weeeeh (¬‿¬)",
    "Wait, really? (⊙_◎)",
    "PLEEEEEAAAAAAAASSSSEEEE (╥_╥)",
    "MARBIE JADE ( ,,⩌'︿'⩌,,)",
    "This is not really a question ( ｡ •̀ ⤙ •́ ｡ )",
    "Di mo na siguro ako love (≖_≖ )",
    "Sana sinabi mo nalang na ayaw mo sakin (¬_¬)",
    "Di ka ba naaawa sakin ( •᷄ᴗ•́)",
    "OK SIGE (っ º - º ς)",
    "LUUUUUUUUUH (⊙_⊙)",
    "Jinjja!?!?!? (っ º - º ς)",
    "SUSUMBONG KITA KAY MAMA (¬`‸´¬)",
];

function getRandomQuestion() {
    return randomQuestions[Math.floor(Math.random() * randomQuestions.length)];
}

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    counter++;

    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    yesBtnSize += 3; // Increase font size
    yesBtn.style.fontSize = `${yesBtnSize}px`;
    yesBtn.style.padding = `${yesBtnSize / 2}px ${yesBtnSize * 1.5}px`;

     if(counter >= 14){ 
        question.innerHTML = getRandomQuestion();
        noBtnSize -= 3; // Increase font size
        noBtn.style.fontSize = `${noBtnSize}px`;
        noBtn.style.padding = `${noBtnSize / 2}px ${noBtnSize * 1.5}px`;
     }
     else {
        question.innerHTML = randomQuestions[counter];
     }

});
