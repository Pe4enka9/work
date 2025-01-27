import Header from "./components/Header/Header.jsx";
import {useEffect, useState} from "react";
import Input from "./components/Input/Input.jsx";
import Label from "./components/Label/Label.jsx";
import Button from "./components/Button/Button.jsx";

export default function App() {
    const [salary, setSalary] = useState('');
    const [currentSalary, setCurrentSalary] = useState('');

    useEffect(() => {
        const salaryStorage = localStorage.getItem('salary');

        if (salaryStorage) {
            setCurrentSalary(salaryStorage + ' руб.');
        }
    }, []);

    const handleChange = (e) => {
        setSalary(() => e.target.value);
    };

    const handleButton = () => {
        const salaryStorage = localStorage.getItem('salary');

        if (salaryStorage !== salary) {
            localStorage.setItem('salary', salary);
            setCurrentSalary(salary + ' руб.');
            setSalary('');
        }
    };

    const handleForm = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <Header/>
            <h1 className="mb-2">Работа</h1>

            <h2 className="mb-2">Твоя оплата в час: {currentSalary}</h2>

            <div className="input-container mb-2">
                <Label htmlFor="salary">Зарплата в час</Label>
                <Input type="number" name="salary" id="salary" value={salary} onChange={handleChange}/>
                <Button onClick={handleButton}>Сохранить</Button>
            </div>

            <form onSubmit={handleForm}>
                <div className="input-container">
                    <Label htmlFor="whatDid">Что сделал</Label>
                    <Input type="text" name="whatDid" id="whatDid"/>
                </div>
            </form>
        </div>
    )
}
