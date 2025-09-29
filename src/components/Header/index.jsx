import { useEffect, useState } from 'react';
import styles from './Header.module.css';

export default function Header({ title, current, total }) {
    const [time, setTime] = useState(0);

    // reseta o tempo sempre que a questão atual mudar
    useEffect(() => {
        setTime(0);
        const timer = setInterval(() => setTime((t) => t + 1), 1000);
        return () => clearInterval(timer);
    }, [current]);

    return(
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <nav>
                <ul>
                    <li className={styles.current}>Questão {current} de {total}</li>
                    <li className={styles.time}>Tempo: {time}s</li>
                </ul>
            </nav>
        </header>
    );
}