import ApiStudent from "./components/ApiStudent";
import Calc from "./components/Calc";
import CountDown from "./components/CountDown";
import CountUp from "./components/CountUp";
import Effect from "./components/Effect";
import Ex1 from "./components/Ex1";
import Login from "./components/Login";
import Name from "./components/Name";
import Object from "./components/Object";
import ReactStr from "./components/ReactStr";
import Weather from "./components/Weather";
import Weather1 from "./components/Weather1";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./style.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
function App() {
    return (
        <>
            <ReactStr />
            <Footer />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/reactstr" element={<ReactStr />} />
                    <Route path="/footer" element={<Footer />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
