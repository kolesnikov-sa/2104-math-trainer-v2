import React, {useState} from 'react';
import './App.css';

function App() {
  let [totalAnswers, setTotalAnswers] = useState(0);
  let [correctAnswers, setCorrectAnswers] = useState(0);
  let [currentAnswer, setCurrentAnswer] = useState('');
  let [randOne, setRandOne] = useState(Math.round(Math.random() * 10));
  let [randTwo, setRandTwo] = useState(Math.round(Math.random() * 10));

  let successRate = 0;

  if (totalAnswers > 0) {
    successRate = correctAnswers / totalAnswers;
  }

  function updateCurrentAnswer(value: string) {
    setCurrentAnswer(value)
  }

  function resetCurrentAnswer() {
    setCurrentAnswer('');
  }

  function checkCurrentAnswer() {
    randOne * randTwo === Number(currentAnswer) ? setCorrectAnswers(++correctAnswers) : setCorrectAnswers(correctAnswers)
    setTotalAnswers(++totalAnswers);
    setRandOne(Math.round(Math.random() * 10));
    setRandTwo(Math.round(Math.random() * 10));
    resetCurrentAnswer();
  }

  return (
    <div className="App">
      <h1>Таблица умножения</h1>
      <h3>Подумай и введи правильный ответ</h3>
      <div className={'resultsBar'}>
        <div className={'resultsBar__correctAnswers'}>{correctAnswers}</div>
        <div className={'resultsBar__successRate'}>{Math.round(successRate * 100)} %</div>
        <div className={'resultsBar__incorrectAnswers'}>{totalAnswers - correctAnswers}</div>
      </div>
      <div className={'tasks'}>
        <div>{randOne}</div>
        <div>*</div>
        <div>{randTwo}</div>
        <div>=</div>
        <div><input onChange={(e) => updateCurrentAnswer(e.currentTarget.value)} value={currentAnswer}></input></div>
      </div>
      <div className={'buttons'}>
        <div className={`${'button'} ${'button_submit'}`} onClick={checkCurrentAnswer}>Ответить</div>
        <div className={`${'button'} ${'button_reset'}`} onClick={resetCurrentAnswer}>Сбросить</div>
      </div>
    </div>
  );
}

export default App;
