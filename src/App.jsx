import Header from "./components/Header/Header.jsx";
import Payment from "./components/Payment/Payment.jsx";

export default function App() {
    return (
        <>
            <Header className="mb-5"/>

            <main>
                <Payment/>
            </main>
        </>
    )
}