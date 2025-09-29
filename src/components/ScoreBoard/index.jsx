import styles from './ScoreBoard.module.css';

export default function ScoreBoard({ answers, questions, onRestart }) {

  const results = answers.map(ans => {
    const question = questions.find(q => q.id === ans.questionId);

    const isCorrect = ans.answer === question.answer;

    return {
      ...ans,                        
      questionText: question.question, 
      correctAnswer: question.answer,  
      points: isCorrect ? question.points : 0,
      isCorrect
    };
  });

  const totalPoints = results
    .filter(r => r.isCorrect)
    .reduce((sum, r) => sum + r.points, 0);

  const bestTime = Math.min(...results.map(r => r.time));
  const rightAnswers = results.filter(r => r.isCorrect).length;
  const correctPercentage = (rightAnswers / questions.length) * 100;

  return (
    <section className={styles.ScoreBoard}>
      <div className={styles.overview}>
        <h1>Resultados do Quiz</h1>
        <p>Pontuação Total: {totalPoints} pontos</p>
        <p>Respostas Corretas: {rightAnswers} de {questions.length} ({correctPercentage.toFixed(2)}%)</p>
        <p>Melhor Tempo: {bestTime} segundos</p>
      </div>

      <div className={styles.list}>
        {results.map((result, questionIndex) => (
          <div
            key={questionIndex}
            className={`${styles.item} ${result.isCorrect ? styles.correct : styles.incorrect}`}
          >
            <p>Questão {questionIndex + 1}: {result.questionText}</p>
            <p>Sua resposta: {result.answer}</p>
            <p>Resposta correta: {result.correctAnswer}</p>
            <p>Tempo: {result.time}s</p>
            <p>Pontos: {result.points}</p>
          </div>
        ))}
      </div>

      <button onClick={onRestart}>Reiniciar Quiz</button>
    </section>
  );
}
