function Question(text, answers) {
  this.text = text;
  this.answers = answers; //массив ответов
}

function Answer(text, isTrue) {
  this.text = text;
  this.isTrue = isTrue;
}

const getAnswers = () => {
  const answers = []; //
  for (let i = 0; i < 4; i++) {
    const ans = new Answer(`Answer ${i}`, i === 2 ? true : false);
    answers.push(ans);
  }
  return answers;
};

const getQuestions = () => {
  const questions = []; //массив вопросов
  for (let i = 0; i < 10; i++) {
    const question = new Question(`Question ${i}`, getAnswers());
    questions.push(question);
  }
  return questions;
};

const quiz = getQuestions(); // формирование вопросов

console.log(quiz);
