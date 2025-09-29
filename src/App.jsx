import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import QuestionCard from './components/QuestionCard'
import questions from './data/questions.js'
// import ScoreBoard from './components/ScoreBoard'


function App() {
  const [current, setCurrent] = useState(0);
  const [answer, setAnswer] = useState([]); // armazena as respostas do usuario
  const [step, setStep] = useState("quiz"); // define a parte do quiz que o usuario está (quiz ou resultado)

  const handleAnswer = (option, timeSpent) => {
    setAnswer(anterior => [
      ...anterior,
      {
        questionId: questions[current].id,
        answer: option,
        time: timeSpent
      }
    ]);

    // avança para a próxima questão ou para o resultado, dependendo do nº da questão atual
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setStep("resultado");
    }

  };


  return (
      <div className={styles.App}>

        {step === "quiz" ? (

          <>
            <Header 
              title="Quiz Interativo"
              current={current + 1}
              total={questions.length}
            />

            <QuestionCard 
              key={current}
              data={questions[current]}
              onAnswer={handleAnswer}
            />
          </>
        ) : (
            <ScoreBoard />
          )}
      </div>
  )
}

export default App
