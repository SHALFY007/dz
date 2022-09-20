
export function timer(count) {
    const timerCount = document.querySelector('.timer-count');
    const buttonStop = document.querySelector('.button-stop');
    const timerInput = document.querySelector('#timer')
    const interval = setInterval(() => {
        buttonStop.addEventListener('click', () => {
            timerInput.value = count + 1;
            clearInterval(interval)
        })
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
    console.log(count)
}