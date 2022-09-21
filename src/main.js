import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { timer } from './timer.js'

const timerCount = document.querySelector('.timer-count');
const timerInput = document.querySelector('#timer')
const buttonStart = document.querySelector('.button-start')
const buttonStop = document.querySelector('.button-stop');

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);
buttonStart.addEventListener('click', setTimer)

function setTimer(event) {
    event.preventDefault();
    timer(timerInput.value)
    console.log('aasd')


}
function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}