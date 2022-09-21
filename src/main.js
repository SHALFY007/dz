import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { timer } from './timer.js'
import chunk from "lodash/chunk";

console.log(chunk(["a", "b", "c", "d"]), 2)

const timerInput = document.querySelector('#timer')
const buttonStart = document.querySelector('.button-start')

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