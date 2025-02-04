import Header from "./components/Header/Header.jsx";
import Payment from "./components/Payment/Payment.jsx";
import Amount from "./components/Amount/Amount.jsx";
import OpeningHours from "./components/OpeningHours/OpeningHours.jsx";

export default function App() {
    return (
        <>
            <Header className="mb-5"/>

            <main>
                <div className="payment-and-amount mb-5">
                    <Payment/>
                    <Amount/>
                </div>

                <OpeningHours className="mb-5"/>
            </main>
        </>
    )
}