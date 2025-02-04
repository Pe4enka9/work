import Header from "./components/Header/Header.jsx";
import Payment from "./components/Payment/Payment.jsx";
import Amount from "./components/Amount/Amount.jsx";

export default function App() {
    return (
        <>
            <Header className="mb-5"/>

            <main>
                <div className="payment-and-amount">
                    <Payment/>
                    <Amount/>
                </div>
            </main>
        </>
    )
}