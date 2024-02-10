const questionsContainer = document.querySelector('.questionsContainer');

function isNmbInObj(obj, numb){
    const leng = obj.length;
    for(i = 0; i < leng; i++){
        if(numb == obj[i]){
            return true;
        }
    }
    return false;
}

const questionsList = [];

let cos = 0;
let cosO = [0]; 
while(cos < 5){
    const nn = Math.ceil(Math.random() * 10);
        if(!isNmbInObj(cosO, nn)){
            let correctop;
            if(nn > 0 && nn < 11){
                correctop = 1;
            }else if(nn > 10 && nn < 21){
                correctop = 2;
            }else if(nn > 20 && nn < 31){
                correctop = 3;
            }else if(nn > 30 && nn < 41){
                correctop = 4;
            }
            questionsList.push({
                qstn: './questions/' + 'question' + nn + '/questionq.jpeg',
                op1: './questions/' + 'question' + nn + '/optionA.jpeg',
                op2: './questions/' + 'question' + nn + '/optionB.jpeg',
                op3: './questions/' + 'question' + nn + '/optionC.jpeg',
                op4: './questions/' + 'question' + nn + '/optionD.jpeg',
                correct: correctop,
            })
            cos = cos + 1;
            cosO.push(nn);
        }
}

let numop;
let numq;

function renderQuestions(arr) {
    let c1 = 1;
    let r = 1;
    for (pregunta of arr) {
        let v = 'q' + c1;

        const question = document.createElement('section');
        question.classList.add('question');
        question.classList.add(v);

        const question_q = document.createElement('section');
        question_q.classList.add('question_q');
        const questionRP = document.createElement('p');
        questionRP.classList.add('qstRP');
        questionRP.innerText = 'Q';
        question_q.appendChild(questionRP);
        const questionRimg = document.createElement('img');
        questionRimg.setAttribute("src", pregunta.qstn);
        questionRimg.classList.add('qstRimg');
        question_q.appendChild(questionRimg);

        let o = 'op' + r + '-' + 1;
        const question_op1 = document.createElement('section');
        question_op1.classList.add('question_op');
        question_op1.classList.add(o);
        const option1p = document.createElement('p');
        option1p.classList.add('qstopP');
        option1p.innerText = 'A';
        question_op1.appendChild(option1p);
        const option1img = document.createElement('img');
        option1img.setAttribute("src", pregunta.op1);
        option1img.classList.add('qstopImg');
        question_op1.appendChild(option1img);
        question_op1.value = r;
        question_op1.addEventListener('click', opA);

        o = 'op' + r + '-' + 2;
        const question_op2 = document.createElement('section');
        question_op2.classList.add('question_op');
        question_op2.classList.add(o);
        const option2p = document.createElement('p');
        option2p.classList.add('qstopP');
        option2p.innerText = 'B';
        question_op2.appendChild(option2p);
        const option2img = document.createElement('img');
        option2img.setAttribute("src", pregunta.op2);
        option2img.classList.add('qstopImg');
        question_op2.appendChild(option2img);
        question_op2.value = r;
        question_op2.addEventListener('click', opB);

        o = 'op' + r + '-' + 3;
        const question_op3 = document.createElement('section');
        question_op3.classList.add('question_op');
        question_op3.classList.add(o);
        const option3p = document.createElement('p');
        option3p.classList.add('qstopP');
        option3p.innerText = 'C';
        question_op3.appendChild(option3p);
        const option3img = document.createElement('img');
        option3img.setAttribute("src", pregunta.op3);
        option3img.classList.add('qstopImg');
        question_op3.appendChild(option3img);
        question_op3.value = r;
        question_op3.addEventListener('click', opC);

        o = 'op' + r + '-' + 4;
        const question_op4 = document.createElement('section');
        question_op4.classList.add('question_op');
        question_op4.classList.add(o);
        const option4p = document.createElement('p');
        option4p.classList.add('qstopP');
        option4p.innerText = 'D';
        question_op4.appendChild(option4p);
        const option4img = document.createElement('img');
        option4img.setAttribute("src", pregunta.op4);
        option4img.classList.add('qstopImg');
        question_op4.appendChild(option4img);
        question_op4.value = r;
        question_op4.addEventListener('click', opD);

        question.appendChild(question_q);
        question.appendChild(question_op1);
        question.appendChild(question_op2);
        question.appendChild(question_op3);
        question.appendChild(question_op4);
        questionsContainer.appendChild(question);
        
        const correctOp = '.op' + r + '-' + pregunta.correct;
        const correctA = document.querySelector(correctOp);
        correctA.classList.add('correct');

        c1 = c1 + 1;
        r = r + 1;
    }
    const cbutton = document.createElement('section');
    cbutton.classList.add('cbutton');
    const button = document.createElement('p');
    button.classList.add('button');
    button.innerText = 'Enviar';
    cbutton.appendChild(button);
    cbutton.addEventListener('click', send);
    questionsContainer.appendChild(cbutton);
}

let correctAnws = 0;

function opA() {
    numq = this.value;
    const qust = '.op' + numq + '-' + 1;
    const ops = document.querySelector(qust);
    const isOpsSelec = ops.classList.contains('pressed');
    const oplB = '.op' + numq + '-' + 2;
    const oplC = '.op' + numq + '-' + 3;
    const oplD = '.op' + numq + '-' + 4;
    const opBs = document.querySelector(oplB);
    const opCs = document.querySelector(oplC);
    const opDs = document.querySelector(oplD);
    const isopBsSelec = opBs.classList.contains('pressed');
    const isopCsSelec = opCs.classList.contains('pressed');
    const isopDsSelec = opDs.classList.contains('pressed');
    const isOpsCorrect = ops.classList.contains('correct');
    const isopBsCorrect = opBs.classList.contains('correct');
    const isopCsCorrect = opCs.classList.contains('correct');
    const isopDsCorrect = opDs.classList.contains('correct');
    if(!isOpsSelec){
        ops.classList.add('pressed');
        if(isOpsCorrect){
            correctAnws = correctAnws + 1;
        }
        if(!isOpsCorrect){
            if(isopBsCorrect && isopBsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopCsCorrect && isopCsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopDsCorrect && isopDsSelec){
                correctAnws = correctAnws - 1;
            }
        }
    }
    if(isopBsSelec){
        opBs.classList.remove('pressed');
    }
    if(isopCsSelec){
        opCs.classList.remove('pressed');
    }
    if(isopDsSelec){
        opDs.classList.remove('pressed');
    }
}

function opB() {
    numq = this.value;
    const qust = '.op' + numq + '-' + 2;
    const ops = document.querySelector(qust);
    const isOpsSelec = ops.classList.contains('pressed');
    const oplA = '.op' + numq + '-' + 1;
    const oplC = '.op' + numq + '-' + 3;
    const oplD = '.op' + numq + '-' + 4;
    const opAs = document.querySelector(oplA);
    const opCs = document.querySelector(oplC);
    const opDs = document.querySelector(oplD);
    const isopAsSelec = opAs.classList.contains('pressed');
    const isopCsSelec = opCs.classList.contains('pressed');
    const isopDsSelec = opDs.classList.contains('pressed');
    const isOpsCorrect = ops.classList.contains('correct');
    const isopAsCorrect = opAs.classList.contains('correct');
    const isopCsCorrect = opCs.classList.contains('correct');
    const isopDsCorrect = opDs.classList.contains('correct');
    if(!isOpsSelec){
        ops.classList.add('pressed');
        if(isOpsCorrect){
            correctAnws = correctAnws + 1;
        }
        if(!isOpsCorrect){
            if(isopAsCorrect && isopAsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopCsCorrect && isopCsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopDsCorrect && isopDsSelec){
                correctAnws = correctAnws - 1;
            }
        }
    }
    if(isopAsSelec){
        opAs.classList.remove('pressed');
    }
    if(isopCsSelec){
        opCs.classList.remove('pressed');
    }
    if(isopDsSelec){
        opDs.classList.remove('pressed');
    }
}

function opC() {
    numq = this.value;
    const qust = '.op' + numq + '-' + 3;
    const ops = document.querySelector(qust);
    const isOpsSelec = ops.classList.contains('pressed');
    const oplA = '.op' + numq + '-' + 1;
    const oplB = '.op' + numq + '-' + 2;
    const oplD = '.op' + numq + '-' + 4;
    const opAs = document.querySelector(oplA);
    const opBs = document.querySelector(oplB);
    const opDs = document.querySelector(oplD);
    const isopAsSelec = opAs.classList.contains('pressed');
    const isopBsSelec = opBs.classList.contains('pressed');
    const isopDsSelec = opDs.classList.contains('pressed');
    const isOpsCorrect = ops.classList.contains('correct');
    const isopAsCorrect = opAs.classList.contains('correct');
    const isopBsCorrect = opBs.classList.contains('correct');
    const isopDsCorrect = opDs.classList.contains('correct');
    if(!isOpsSelec){
        ops.classList.add('pressed');
        if(isOpsCorrect){
            correctAnws = correctAnws + 1;
        }
        if(!isOpsCorrect){
            if(isopAsCorrect && isopAsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopBsCorrect && isopBsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopDsCorrect && isopDsSelec){
                correctAnws = correctAnws - 1;
            }
        }
    }
    if(isopAsSelec){
        opAs.classList.remove('pressed');
    }
    if(isopBsSelec){
        opBs.classList.remove('pressed');
    }
    if(isopDsSelec){
        opDs.classList.remove('pressed');
    }
}

function opD() {
    numq = this.value;
    const qust = '.op' + numq + '-' + 4;
    const ops = document.querySelector(qust);
    const isOpsSelec = ops.classList.contains('pressed');
    const oplA = '.op' + numq + '-' + 1;
    const oplB = '.op' + numq + '-' + 2;
    const oplC = '.op' + numq + '-' + 3;
    const opAs = document.querySelector(oplA);
    const opBs = document.querySelector(oplB);
    const opCs = document.querySelector(oplC);
    const isopAsSelec = opAs.classList.contains('pressed');
    const isopBsSelec = opBs.classList.contains('pressed');
    const isopCsSelec = opCs.classList.contains('pressed');
    const isOpsCorrect = ops.classList.contains('correct');
    const isopAsCorrect = opAs.classList.contains('correct');
    const isopBsCorrect = opBs.classList.contains('correct');
    const isopCsCorrect = opCs.classList.contains('correct');
    if(!isOpsSelec){
        ops.classList.add('pressed');
        if(isOpsCorrect){
            correctAnws = correctAnws + 1;
        }
        if(!isOpsCorrect){
            if(isopAsCorrect && isopAsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopBsCorrect && isopBsSelec){
                correctAnws = correctAnws - 1;
            }
            if(isopCsCorrect && isopCsSelec){
                correctAnws = correctAnws - 1;
            }
        }
    }
    if(isopAsSelec){
        opAs.classList.remove('pressed');
    }
    if(isopBsSelec){
        opBs.classList.remove('pressed');
    }
    if(isopCsSelec){
        opCs.classList.remove('pressed');
    }
}

function send() {
    for(i = 1; i < 6; i++) {
        const qpl = '.q' + i;
        const qest = document.querySelector(qpl);
        qest.classList.add('inactive');
    }
    const cButton = document.querySelector('.cbutton');
    cButton.classList.add('inactive');
    const cAnswer = document.createElement('section');
    cAnswer.classList.add('cAnswer');
    const answer = document.createElement('p');
    answer.classList.add('answer');
    answer.innerText = correctAnws;
    cAnswer.appendChild(answer);
    questionsContainer.appendChild(cAnswer);
}

renderQuestions(questionsList);