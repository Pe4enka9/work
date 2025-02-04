import './amount.css';
import {useEffect, useState} from "react";

export default function Amount() {
    const [money, setMoney] = useState(localStorage.getItem('money') || '0');

    useEffect(() => {
        const handleStorageChange = () => {
            setMoney(localStorage.getItem('money') || '0');
        };

        window.addEventListener('storage', handleStorageChange);

        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    return (
        <section id="amount">
            <h2>Слушай, я тут подсчитал...</h2>
            {money !== '0' ? (
                <p>У тебя на счету {money} руб. Поздравляю тебя!</p>
            ) : (
                <p>Ты пока что нищий :(</p>
            )}
            <p>А сегодня ты заработал 500 руб. Тоже неплохой результат!</p>
        </section>
    )
}