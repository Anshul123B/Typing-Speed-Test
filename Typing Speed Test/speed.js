const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;

const sentences = [
    'The quick brown fox jumps over the lazy little dog',
    'Pack my box with five dozen liquor jugs',
    'Sphinx of black quartz, judge my vow'
];

const calculateTypingSpeed = (time_taken) => {
    let totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(' ').length;

    if (actualWords !== 0) {
        let typing_speed = (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minute. You wrote ${actualWords} words, and it took ${time_taken} seconds.`;
    } else {
        score.innerHTML = `Your typing speed is 0 words per minute. Time taken: ${time_taken} seconds.`;
    }
}

const endTypingTest = () => {
    btn.innerText = 'Start';

    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime - startTime) / 1000;
    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = '';
    typing_ground.value = '';
}

const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
    show_sentence.innerHTML = sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = 'Done';
}

btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case 'start':
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

        case 'done':
            typing_ground.setAttribute('disabled', 'true');
            endTypingTest();
            break;
    }
});
