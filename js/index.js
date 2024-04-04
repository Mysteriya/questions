const button_Yes = document.querySelector('.yes')
const button_No = document.querySelector('.no')

const title = document.querySelector('.title')

const error = document.querySelector('h2')

let answer = null
let step = 0
let question = null
var howId = 0

const arrayQuests = [
    {id: 1, title: 'Начать?', answer1: true},
    {id: 2, title: 'Что такое ReactJS?', answer1: true, button_text1: 'фреймворк', button_text2: 'библиотека'}, // больше 10 лет - true
    {id: 3, title: 'Чем славится TypeScript?', answer1: true, button_text1: 'Типизация', button_text2: 'это JavaScript'}, // не твое дело - false
    {id: 4, title: 'Что такое css?', answer1: false, button_text1: 'Это стили для браузера', button_text2: 'каскадная таблица стилей'}, // больше 10 - false
    {id: 5, title: 'Почему js не используется в больших проектах?', answer1: true, button_text1: 'Он не типизирован', button_text2: 'Слишком сложно описывать код'}, // помойка лучше - true
    {id: 6, title: 'Что такое html?', answer1: false, button_text1: 'Стандартизированный язык для отображения объектов на странице ', button_text2: 'язык гипертекстовой разметки текста'}, // линукс - false
    {id: 7, title: 'Какой фреймворк используют для очень крупных проектов?', answer1: true, button_text1: 'Angular', button_text2: 'React'}, // передать свою геолакацию - true
    {id: 8, title: 'Тег для большого заголовка', answer1: true, button_text1: 'h1', button_text2: 'h5'}, // нет - false
    {id: 9, title: 'Закончить тест?', answer1: true, button_text1: 'ДА', button_text2: 'НЕТ'}, // да - true
]

button_No.onclick = () => {
    answer = false
    qests()
}
button_Yes.onclick = () => {
    answer = true
    qests()
}

function qests() {
    if(howId === 8){
        fall()
    }
    if(arrayQuests[howId].answer1 === answer){
        howId = howId + 1
        result = arrayQuests[howId].title
        render(result)
    }else{
        error.className = 'error'
        error.textContent = 'ТЫ НЕ ИЗ НАШИХ'


        setTimeout(() => {
            fall()
        }, 4000)
    }
}
function fall(){
    window.location.href = 'ricroll.html';
}

function render(result){
    title.textContent = result

    button_Yes.textContent = arrayQuests[howId].button_text1
    button_No.textContent = arrayQuests[howId].button_text2

    console.log(howId)
}