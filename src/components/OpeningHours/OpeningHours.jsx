import './openingHours.css';
import Button from "../Button/Button.jsx";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export default function OpeningHours({className = ''}) {
    const [formData, setFormData] = useState({
        time: '',
        hoursOrMinutes: 'minutes',
    });
    const [error, setError] = useState(null);

    const handleInput = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
        setError(null);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const tryParse = Number(formData.time);

        if (isNaN(tryParse) || tryParse <= 0) {
            setError('Ну кого ты обманываешь?');
        } else {
            const salary = localStorage.getItem('salary');
            const currentMoney = localStorage.getItem('money');

            if (formData.hoursOrMinutes === 'hours') {
                const money = +currentMoney + formData.time * salary;
                localStorage.setItem('money', money.toString());
            } else {
                const money = +currentMoney + (formData.time / 60) * salary;
                localStorage.setItem('money', money.toString());
            }
        }
    };

    return (
        <form id="opening-hours" className={className}>
            <h2>Так, дружище, сколько ты сегодня работал?</h2>

            <div className="general">
                <div className="input-container-form">
                    <div className="input-container">
                        <label htmlFor="time">Время работы</label>
                        <input type="text" name="time" id="time" placeholder="Например: 20" value={formData.time}
                               onChange={handleInput}/>
                    </div>

                    <div className="select-container">
                        <select name="hoursOrMinutes" id="hoursOrMinutes" value={formData.hoursOrMinutes}
                                onChange={handleInput}>
                            <option value="minutes">мин.</option>
                            <option value="hours">ч.</option>
                        </select>
                    </div>
                </div>

                <div className={`error ${error ? 'visible' : ''}`}>{error}</div>
            </div>

            <Button type="submit" onClick={handleClick}>Заплакать</Button>
        </form>
    )
}