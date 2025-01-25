import './header.css';
import {useEffect, useState} from "react";

export default function Header() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const time = setInterval(() => setTime(new Date()), 1000);

        return () => clearInterval(time);
    }, []);

    return (
        <header>
            <div>Время: {time.toLocaleTimeString()}</div>
            <hr/>
        </header>
    )
}