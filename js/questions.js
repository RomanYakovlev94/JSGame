
const baseDiv = document.getElementById("allInside");
const start = document.getElementById("btnStart");
let randomNumber = null;
let objQuest = [];

objQuest[0] = {
    numQuest: "555",
    question: "for (let i = 0; i < 3; i++)",
    a: "0 1 2 и 0 1 2",
    b: "капуста",
    c: "3 3 3 и 0 1 2",
    true: "c"
}
objQuest[1] = {
    numQuest: "777",
    question: "for (let i = 0; i < 3; i++)",
    a: "0 1 2 и 0 1 2",
    b: "морковь",
    c: "3 3 3 и 0 1 2",
    true: "c"
}
objQuest[2] = {
    numQuest: "989",
    question: "for (let i = 0; i < 3; i++)",
    a: "0 1 2 и 0 1 2",
    b: "сельдерей",
    c: "3 3 3 и 0 1 2",
    true: "c"
}

start.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * objQuest.length);
    baseDiv.innerHTML = `
        <div id="numQuest">${objQuest[randomNumber].numQuest}</div>
        <div id="question">${objQuest[randomNumber].question}</div>
        <div id="a">${objQuest[randomNumber].a}</div>
        <div id="b">${objQuest[randomNumber].b}</div>
        <div id="c">${objQuest[randomNumber].c}</div>
        <button class="btn" id="reload">reload</button>
        `
});