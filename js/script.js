const baseDiv = document.getElementById("allInside");
const start = document.getElementById("btn-start");
const objQuest = [];
const arrAnswers = [];

let reload;
let scoreTrue = 0;
let scoreFalse = 0;
let randomNumber = null;

let render = () => {
    randomNumber = Math.floor(Math.random() * objQuest.length);
    baseDiv.innerHTML += `
    <div id="numQuest" class="mrg10"> НОМЕР ВОПРОСА: ${randomNumber+1}</div>
    <img id="question-img" width="350" src="${objQuest[randomNumber].question}" alt="quesPhoto">
    <button id="a" class="btn btn-answer mrg10">${objQuest[randomNumber].a}</button>
    <button id="b" class="btn btn-answer mrg10">${objQuest[randomNumber].b}</button>
    <button id="c" class="btn btn-answer mrg10">${objQuest[randomNumber].c}</button>
    <button id="d" class="btn btn-answer mrg10">${objQuest[randomNumber].d}</button>
    <button class="btn mrg10 btn-gr" id="reload"><span>RELOAD<span></span></span></button>
    <div>${scoreTrue} true</div>
    <div>${scoreFalse} false</div>
    `
    let aAnswer = document.getElementById("a");
    let bAnswer = document.getElementById("b");
    let cAnswer = document.getElementById("c");
    let dAnswer = document.getElementById("d");
    let reload = document.getElementById("reload");

    reload.addEventListener('click', () => {
        baseDiv.innerHTML = " "
        render();
    });
    a.addEventListener('click', () => {
        if ("a" == objQuest[randomNumber].true){
            scoreTrue += 1;
            renderTrueAnswer();
        }else{
            scoreFalse +=1;
            renderTrueAnswer();
        }
    });
    b.addEventListener('click', () => {
        if ("b" == objQuest[randomNumber].true){
            scoreTrue += 1;
            renderTrueAnswer();
        }else{
            scoreFalse +=1;
            renderTrueAnswer();
        }
    });
    c.addEventListener('click', () => {
        if ("c" == objQuest[randomNumber].true){
            scoreTrue += 1;
            renderTrueAnswer();
        }else{
            scoreFalse +=1;
            renderTrueAnswer();
        }
    });
    d.addEventListener('click', () => {
        if ("d" == objQuest[randomNumber].true){
            scoreTrue += 1;
            renderTrueAnswer();
        }else{
            scoreFalse +=1;
            renderTrueAnswer();
        }
    });
    
}

let renderTrueAnswer = () => {
    baseDiv.innerHTML = `
    <img id="question-img" width="350" src="${objQuest[randomNumber].question}" alt="quesPhoto">

    <div id="answerTrue" class="mrg10 gradient"> ${objQuest[randomNumber].answer}</div>
    <button class="btn mrg10" id="reload">RELOAD</button>
    `
    let reload = document.getElementById("reload");

    reload.addEventListener('click', () => {
        baseDiv.innerHTML = " "
        render();
    });
}



start.addEventListener('click', () => {
    baseDiv.innerHTML = " "
    render();
});


objQuest[0] = {
    numQuest: "${randomNumber}",
    question: "img/questions/1.jpg",
    a: "A: Lydia и undefined",
    b: "B: Lydia и ReferenceError",
    c: "C: ReferenceError и 21",
    d: "D: undefined и ReferenceError",
    true: "d",
    answer: "Ответ D. Внутри функции мы сперва определяем переменную name с помощью ключевого слова var. Это означает, что переменная будет поднята (область памяти под переменную будет выделена во время фазы создания) со значением undefined по умолчанию, до тех пора пока исполнение кода не дойдет до строчки, где определяется переменная. Мы еще не определили значение name когда пытаемся вывести её в консоль, поэтому в консоли будет undefined. Переменные, определенные с помощью let (и const), также поднимаются, но в отличие от var, не инициализируются. Доступ к ним не возможен до тех пор, пока не выполнится строка их определения (инициализации). Это называется \"временная мертвая зона\". Когда мы пытаемся обратиться к переменным до того момента как они определены, JavaScript выбрасывает исключение ReferenceError."
}
objQuest[1] = {
    numQuest: "${randomNumber}",
    question: "img/questions/2.jpg",
    a: "A: 0 1 2 и 0 1 2",
    b: "B: 0 1 2 и 3 3 3",
    c: "C: 3 3 3 и 0 1 2",
    d: "D: -------------",
    true: "c",
    answer: "Ответ: C. Из-за очереди событий в JavaScript, функция setTimeout вызывается после того как цикл будет завершен. Так как переменная i в первом цикле была определена с помощью var, она будет глобальной. В цикле мы каждый раз увеличиваем значение i на 1, используя унарный оператор ++. К моменту выполнения функции setTimeout значение i будет равно 3 в первом примере. Во втором цикле переменная i определена с помощью let. Такие переменные (а также const) имеют блочную область видимости (блок это что угодно между { }). С каждой итерацией i будет иметь новое значение, и каждое значение будет замкнуто в своей области видимости внутри цикла."
}
objQuest[2] = {
    numQuest: "${randomNumber}",
    question: "img/questions/3.jpg",
    a: "A: 20 и 62.83185307179586",
    b: "B: 20 и NaN",
    c: "C: 20 и 63",
    d: "D: NaN и 63",
    true: "b",
    answer: "Ответ: B. Заметь, что diameter это обычная функция, в то время как perimeter это стрелочная функция. У стрелочных функций значение this указывает на окружающую область видимости, в отличие от обычных функций! Это значит, что при вызове perimeter значение this у этой функции указывает не на объект shape, а на внешнюю область видимости (например, window). У этого объекта нет ключа radius, поэтому возвращается undefined. "
}
