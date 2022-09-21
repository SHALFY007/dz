
export function timer(count) {
    const timerCount = document.querySelector('.timer-count');
    const buttonStop = document.querySelector('.button-stop');
    const timerInput = document.querySelector('#timer')
    const buttonStart = document.querySelector('.button-start')
    const interval = setInterval(() => {
        if (count <= 0) {
            const audio = new Audio('./sound/tada.mp3');
            audio.play();
            clearInterval(interval)
        }
        timerCount.textContent = `Осталось: ${count} секунд`;
        count = count - 1;
        console.log(count)
    },
        1000)
    buttonStart.addEventListener('click', () => {
        clearInterval(interval)
    })
    buttonStop.addEventListener('click', () => {
        timerInput.value = count + 1;
        clearInterval(interval)
    })
    console.log(count)
}
