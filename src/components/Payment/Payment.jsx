import './payment.css';
import Button from "../Button/Button.jsx";
import {useState} from "react";

export default function Payment() {
    const [price, setPrice] = useState('');
    const [currentPrice, setCurrentPrice] = useState(localStorage.getItem('salary'));
    const [error, setError] = useState(null);

    const handleInput = (e) => {
        setPrice(e.target.value);
        setError(null);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const tryParse = Number(price);

        if (isNaN(tryParse)) {
            setError('Тут должно быть число, проказник!');
        } else if (tryParse <= 0) {
            setError('Не верю, что ты получаешь 0 денег');
        } else {
            localStorage.setItem('salary', tryParse.toString());
            setCurrentPrice(localStorage.getItem('salary'));
        }
    };

    return (
        <form id="payment">
            <h2>Оплата {currentPrice ? `(${currentPrice} руб/час)` : ''}</h2>

            <div className="input-container">
                <label htmlFor="price">Сколько берёшь в час?</label>
                <input type="text" name="price" id="price" placeholder="Например: 500" value={price}
                       onChange={handleInput}/>
                <div className={`error ${error ? 'visible' : ''}`}>{error}</div>
            </div>

            <Button type="submit" onClick={handleClick}>Подтвердить</Button>
        </form>
    )
}