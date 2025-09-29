import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import QuestionCard from './components/QuestionCard'
// import ScoreBoard from './components/ScoreBoard'


function App() {
  const [current, setCurrent] = useState(0);
  const [step, setStep] = useState("quiz");


  return (
      <div className={styles.App}>

        {step === "quiz" ? (

          <>
            <Header 
              title="Quiz Interativo"
              current={current + 1}
              // total={questions.length}
            />

            <QuestionCard 
            
            />
          </>
        ) : (
            <ScoreBoard />
          )}
      </div>
  )
}

export default App
