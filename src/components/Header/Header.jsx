import './header.css';
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
export default function Header({className = null}) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()));

        return () => clearInterval(interval);
    }, []);

    return (
        <header className={className}>
            <h1>Работа</h1>
            <p>Текущее время: {time.toLocaleTimeString()}</p>
        </header>
    )
}