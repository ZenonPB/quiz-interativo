import { useEffect } from "react";
import { useState } from "react";
import styles from './QuestionCard.module.css'

export default function QuestionCard({ data, onAnswer }) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        setTime(0);
        const timer = setInterval(() => setTime((t) => t + 1), 1000);
        return () => clearInterval(timer);
    }, [data]); 

    const handleClick = (option) => {
        onAnswer(option, time); // pega apenas as infos necessarias para o feedback (se acertou e o tempo)
    }

    return(
        <section className={styles.card}>
            <h2>{data.question}</h2>
            <span>{data.category}</span>

            <div className={styles.options}>
                {data.options.map(option => (
                    <button onClick={() => handleClick(option)} key={option}>
                        {option}
                    </button>
                ))}
            </div>

            
        </section>
    )

}