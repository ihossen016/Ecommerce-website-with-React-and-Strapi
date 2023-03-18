import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./scenes/checkout/Checkout";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/itemDetails";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="item/:itemId" element={<ItemDetails />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="checkout/success" element={<Confirmation />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
