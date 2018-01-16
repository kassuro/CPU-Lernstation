const KEYS = [
    'questionOne',
    'questionTwo',
    'questionThree',
    'questionFour',
    'questionFive',
    'questionSix',
    'questionSeven',
    'questionEight',
    'questionNine',
    'questionTen'
]

let answers = {
    questionOne: [false, true, true, false],
    questionTwo: [true, false, false, true],
    questionThree: [true, false, false, false],
    questionFour: [false, true, false, false],
    questionFive: [false, true, false, false],
    questionSix: [false, false, false, false],
    questionSeven: [true, true, true, false],
    questionEight: [true, false, false, false],
    questionNine: [false, true, false, false],
    questionTen: [true, false, false, false],
}

let userAnwswer = {
    questionOne: [],
    questionTwo: [],
    questionThree: [],
    questionFour: [],
    questionFive: [],
    questionSix: [],
    questionSeven: [],
    questionEight: [],
    questionNine: [],
    questionTen: [],
}

function compare(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function check() {
    for (let i = 1; i < 11; i++) {
        let inputs = $(`#q${i} input`);
        let tmp = [];
        for (let j = 0; j < inputs.length; j++) {
            tmp.push(inputs[j].checked);
        }
        userAnwswer[KEYS[i-1]] = tmp;

        if (compare(userAnwswer[KEYS[i-1]], answers[KEYS[i-1]])) {
            $(`#q${i}`).addClass('good');
        }
        else {
            $(`#q${i}`).addClass('bad');
        }
    }
}

function reset() {
    for (let i = 1; i < 11; i++) {
        $(`#q${i}`).attr('class', '');
        let inputs = $(`#q${i} input`);
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].checked = false;
        }
    }
}

$(document).ready(function () {
    $('#check').on('click', check);
    $('#reset').on('click', reset);
});