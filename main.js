// Navigation menu code ------------------------
const ul = document.querySelector("ul");
const bar = document.querySelector(".fa-bars");

bar.addEventListener ("click", function () {
    ul.classList.toggle("show-mobile-nav");
    if (ul.className === "show-mobile-nav") {
        bar.className = "fa-solid fa-circle-xmark"
    }else {
        bar.className = "fa-solid fa-bars"
    }
})

// Typing text code -----------------------------

const typing_text = document.getElementById("typingText");

const textArray = ["Developer","Designer","Progmmer..."]

let count = 0;
let index = 0;
let currentText = 0;
let letter = 0;
let intervalId = setInterval (function () {
    currentText = textArray[count];
    letter = currentText.slice(0,index++);
   typing_text.innerHTML = letter;
    if (count ===  0) {
        typing_text.style.color = "#C4E538"
    }
    if (count ===  1) {
        typing_text.style.color = "#FDA7DF"
    }
    if (count ===  2) {
        typing_text.style.color = "#0652fD"
    }
    if (letter.length === currentText.length) {
        count++
        index = 0;
    }
    if (count === textArray.length) {
        count = 0;
    }
},600)


// About Text code 
let blanc_content = document.getElementById("blanc-content")

let Experience = `<h3>Font-End</h3>
<p>HTML, CSS, Javascirpt, React</p>
<p> 2 years of web development Experience </p>
`;
let Skills = `<h3>UX / UI</h3>
<p>I have skills in figma ux / ui design</p>
<h3>Development</h3>
<p>Full-stack web development</p>
<h3>React</h3>
<p>Single page application</p>`

let Eduction = `<h3>Primary Deucation </h3>
<p>Primary education complite from Babulia Primary Govt. School <p/>
<h3>Secondary Education</h3>
<p>Secondary education complite from Babulia J,S  High School <p/>
<h3>Higher Education</h3>
<p>Higher education complite from Satkhira City Collage <p/>
`

const SkillsBtn = document.getElementById("SkillsBtn");
SkillsBtn.addEventListener ("click", function () {
    SkillsBtn.classList.add("text-btn");
    ExpBtn.classList.remove("text-btn");
    EducBtn.classList.remove("text-btn");
    blanc_content.innerHTML = Skills;
})

const ExpBtn = document.getElementById("ExpBtn");
ExpBtn.addEventListener("click", function () {
    ExpBtn.classList.add("text-btn");
    SkillsBtn.classList.remove("text-btn");
    EducBtn.classList.remove("text-btn");
    blanc_content.innerHTML = Experience;
})

const EducBtn = document.getElementById("EducBtn");
EducBtn.addEventListener("click", function () {
    EducBtn.classList.add("text-btn");
    SkillsBtn.classList.remove("text-btn");
    ExpBtn.classList.remove("text-btn");
    blanc_content.innerHTML = Eduction;
})


// Project Slider code 

