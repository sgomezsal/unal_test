const questionsContainer = document.querySelector('.questionsContainer');

const questionsList = [];
questionsList.push({
    qstn: 'pregunta1',
    op1: 'opción1',
    op2: 'opción2',
    op3: 'opción3',
    op4: 'opción4',
})
questionsList.push({
    qstn: 'pregunta2',
    op1: 'opción1',
    op2: 'opción2',
    op3: 'opción3',
    op4: 'opción4',
})
questionsList.push({
    qstn: 'pregunta3',
    op1: 'opción1',
    op2: 'opción2',
    op3: 'opción3',
    op4: 'opción4',
})

function renderQuestions(arr) {
    for (pregunta of arr) {
        const question = document.createElement('section');
        question.classList.add('question');

        const question_q = document.createElement('section');
        question_q.classList.add('question_q');
        const questionR = document.createElement('p');
        // p.classList.add();
        questionR.innerText = pregunta.qstn;
        // const img
        // img.setAtribute
        // img.classlist
        question_q.appendChild(questionR);
        // question_q.appendChild(img);

        const question_op1 = document.createElement('section');
        question_op1.classList.add('question_op');
        const option1 = document.createElement('p');
        // p.classList.add();
        option1.innerText = pregunta.op1;
        // const img
        // img.setAtribute
        // img.classlist
        question_op1.appendChild(option1);
        // question_q.appendChild(img);

        const question_op2 = document.createElement('section');
        question_op2.classList.add('question_op');
        const option2 = document.createElement('p');
        // p.classList.add();
        option2.innerText = pregunta.op2;
        // const img
        // img.setAtribute
        // img.classlist
        question_op2.appendChild(option2);
        // question_q.appendChild(img);

        const question_op3 = document.createElement('section');
        question_op3.classList.add('question_op');
        const option3 = document.createElement('p');
        // p.classList.add();
        option3.innerText = pregunta.op3;
        // const img
        // img.setAtribute
        // img.classlist
        question_op3.appendChild(option3);
        // question_q.appendChild(img);

        const question_op4 = document.createElement('section');
        question_op4.classList.add('question_op');
        const option4 = document.createElement('p');
        // p.classList.add();
        option4.innerText = pregunta.op4;
        // const img
        // img.setAtribute
        // img.classlist
        question_op4.appendChild(option4);
        // question_q.appendChild(img);


        question.appendChild(question_q);
        question.appendChild(question_op1);
        question.appendChild(question_op2);
        question.appendChild(question_op3);
        question.appendChild(question_op4);
        questionsContainer.appendChild(question);
    }
}

renderQuestions(questionsList);