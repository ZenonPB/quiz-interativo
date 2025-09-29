import './App.module.css'

function App() {
  const [current, setCurrent] = useState(0);
  const [step, setStep] = useState("quiz");


  return (
    <>
      <div className={styles.App}>
        
        {step === "quiz" ? (
          <Header />
          <QuestionCard />
        )
          : (
            <ScoreBoard />
          )}
      </div>
    </>
  )
}

export default App
