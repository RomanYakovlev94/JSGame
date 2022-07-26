const baseDiv = document.getElementById("allInside");
const start = document.getElementById("btn-start");
const objQuest = [];
const arrAnswersTrue = [];

let reload;
let scoreTrue = 0;
let scoreFalse = 0;
let randomNumber = null;

let render = () => {
    randomNumber = Math.floor(Math.random() * objQuest.length);
    if(arrAnswersTrue.includes(randomNumber)){
        baseDiv.innerHTML = " "
        render();
    }else{
        baseDiv.innerHTML += `
        <div class="allRender">
            <div id="numQuest" class="mrg10"> НОМЕР ВОПРОСА: ${randomNumber+1}</div>
            <img id="question-img" width="350" src="${objQuest[randomNumber].question}" alt="quesPhoto">
            <button id="a" class="btn btn-answer mrg10">${objQuest[randomNumber].a}</button>
            <button id="b" class="btn btn-answer mrg10">${objQuest[randomNumber].b}</button>
            <button id="c" class="btn btn-answer mrg10">${objQuest[randomNumber].c}</button>
            <button id="d" class="btn btn-answer mrg10">${objQuest[randomNumber].d}</button>
            <button class="btn mrg10 btn-gr" id="reload"><span>RELOAD<span></span></span></button>
            <div class="scores">    
                <div class="scores-true">${scoreTrue} TRUE</div>
                <div class="scores-false">${scoreFalse} FALSE</div>
            </div>
        </div>
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
        aAnswer.addEventListener('click', () => {
            if ("a" == objQuest[randomNumber].true){
                scoreTrue += 1;
                arrAnswersTrue.push(randomNumber);
                renderTrueAnswer();
            }else{
                scoreFalse +=1;
                renderTrueAnswer();
            }
        });
        bAnswer.addEventListener('click', () => {
            if ("b" == objQuest[randomNumber].true){
                scoreTrue += 1;
                arrAnswersTrue.push(randomNumber);
                renderTrueAnswer();
            }else{
                scoreFalse +=1;
                renderTrueAnswer();
            }
        });
        cAnswer.addEventListener('click', () => {
            if ("c" == objQuest[randomNumber].true){
                scoreTrue += 1;
                arrAnswersTrue.push(randomNumber);
                renderTrueAnswer();
            }else{
                scoreFalse +=1;
                renderTrueAnswer();
            }
        });
        dAnswer.addEventListener('click', () => {
            if ("d" == objQuest[randomNumber].true){
                scoreTrue += 1;
                arrAnswersTrue.push(randomNumber);
                renderTrueAnswer();
            }else{
                scoreFalse +=1;
                renderTrueAnswer();
            }
        });
    }
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
objQuest[3] = {
    numQuest: "${randomNumber}",
    question: "img/questions/4.jpg",
    a: "A: 1 и false",
    b: "B: false и NaN",
    c: "C: false и false",
    d: "D: -------------",
    true: "a",
    answer: "Ответ: A. Унарный плюс приводит операнд к числу. true это 1, а false это 0. Строка 'Lydia' это \"истинное\" значение. На самом деле мы спрашиваем \"является ли это истинное значение ложным\"? Ответ: false."
}
objQuest[4] = {
    numQuest: "${randomNumber}",
    question: "img/questions/5.jpg",
    a: "A: mouse.bird.size",
    b: "B: mouse[bird.size]",
    c: "C: mouse[bird[\"size\"]]",
    d: "D: Все варианты валидны",
    true: "a",
    answer: "Ответ: A. В JavaScript все ключи объекта являются строками (кроме Symbol). И хотя мы не набираем их как строки, они всегда преобразовываются к строкам под капотом. JavaScript интерпретирует (или распаковывает) операторы. При использовании квадратных скобок JS замечает [ и продолжает пока не встретит ]. Только после этого он вычислит то, что находится внутри скобок. mouse[bird.size]: Сперва определяется bird.size, которое равно \"small\". mouse[\"small\"] возвращает true. Но с записью через точку так не происходит. У mouse нет ключа bird. Таким образом, mouse.bird равно undefined. Затем мы запрашиваем ключ size, используя точечную нотацию: mouse.bird.size. Так как mouse.bird это undefined, мы запрашиваем undefined.size. Это не является валидным, и мы получаем ошибку типа Cannot read property \"size\" of undefined."
}
objQuest[5] = {
    numQuest: "${randomNumber}",
    question: "img/questions/6.jpg",
    a: "A: Hello",
    b: "B: Hey!",
    c: "C: undefined",
    d: "D: ReferenceError",
    true: "a",
    answer: "Ответ A. В JavaScript все объекты являются ссылочными типами данных. Сперва переменная c указывает на объект. Затем мы указываем переменной d ссылаться на тот же объект, что и c. Когда ты изменяешь один объект, то изменяются значения всех ссылок, указывающих на этот объект."
}
objQuest[6] = {
    numQuest: "${randomNumber}",
    question: "img/questions/7.jpg",
    a: "A: true false true",
    b: "B: false false true",
    c: "C: true false false",
    d: "D: false true true",
    true: "c",
    answer: "Ответ: C. new Number() это встроенный конструктор функции. И хотя он выглядит как число, это не настоящее число: у него есть ряд дополнительных фич и это объект. Оператор == разрешает приведение типов, он проверяет равенство значений. Оба значения равны 3, поэтому возвращается true. При использовании оператора === значение и тип должны быть одинаковыми. Но в нашем случае это не так: new Number() это не число, это объект. Оба возвращают false."
}
objQuest[7] = {
    numQuest: "${randomNumber}",
    question: "img/questions/8.jpg",
    a: "A: orange",
    b: "B: purple",
    c: "C: green",
    d: "D: TypeError",
    true: "d",
    answer: "Ответ: D. Функция colorChange является статичной. Статичные методы не имеют доступа к экземплярам класса. Так как freddie это экземпляр, то статичный метод там не доступен. Поэтому выбрасывается ошибка TypeError."
}
objQuest[8] = {
    numQuest: "${randomNumber}",
    question: "img/questions/9.jpg",
    a: "A: {}",
    b: "B: ReferenceError: greetign is not defined",
    c: "C: undefined",
    d: "D: ---------",
    true: "a",
    answer: "Ответ: A. В консоли выведется объект, потому что мы только что создали пустой объект в глобальном объекте! Когда мы вместо greeting написали greetign, интерпретатор JS на самом деле выполнил global.greetign = {} (или window.greetign = {} в браузере). Нужно использовать \"use strict\", чтобы избежать такого поведения. Эта запись поможет быть уверенным в том, что переменная была определена перед тем как ей присвоили значение."
}
objQuest[9] = {
    numQuest: "${randomNumber}",
    question: "img/questions/10.jpg",
    a: "A: Ничего, всё в порядке!",
    b: "B: SyntaxError",
    c: "C: undefined",
    d: "D: ReferenceError",
    true: "a",
    answer: "Ответ: A. В JavaScript это возможно, т.к. функции это объекты! (Всё есть объект кроме примитивов). Функция — это специальный тип объекта, который можно вызвать. Кроме того, функция — это объект со свойствами. Свойство такого объекта нельзя вызвать, так как оно не является функцией."
}
