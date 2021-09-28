//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers =[];
var answersText=[];
var answerQuastion=[]

doWhile(works.a00,works.a1,works.a2,works.a0);
answers[0]=event;
answerQuastion[0]=works.a00;
if (answers[0]==1){
    answersText[0]=works.a1;
} else if (answers[0]==2) {
    answersText[0]=works.a2;
}

 
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        doWhile(works.b00,works.b1,works.b2,works.b0);
        answers[1]=event;
        answerQuastion[1]=works.b00;
        if (event==1){
            answersText[1]=works.b1;
        } else if (event==2) {
            answersText[1]=works.b2;
        }

        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                doWhile(works.d00,works.d1,works.d2,works.d0);
                answers[2]=event      
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        doWhile(works.c00,works.c1,works.c2,works.c0);
        answers[1]=event;
        answerQuastion[1]=works.c00;
        if (event==1){
            answersText[1]=works.c1;
        } else if (event==2) {
            answersText[1]=works.c2;
        }
        switch (event) {
            case 1: // Второе действие
            case 2: // Второе действие
                doWhile(works.d00,works.d1,works.d2,works.d0);
                answers[2]=event;
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
if (answers[2]==1){
    alert("на ваш вопрос "+answerQuastion[0]+" Ответ "+answersText[0]);
} else if (answers[2]==2){
    alert("Ответ на ваш вопрос "+answerQuastion[1]+" Ответ "+answersText[1]);
} 

alert('Спасибо за игру ');

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}
/**
*param question, answ1,answ2, var_answer - свойства объекта
 */
function doWhile(question, answ1,answ2, var_answer) {
    do {//Выводим первый вопрос
    ok = false;
    event = +prompt(question +answ1 + answ2 + '-1 - Выход из игры');
   
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(var_answer, event);
    }
    } while (!ok);

}
function arrayAnswers(question, answ1,answ2, var_answer){
    if (x==1){

    }

}

