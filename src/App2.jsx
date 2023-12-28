import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";
import App from "./App";


export default function App2() {
    return (
        // <BrowserRouter>
        //     <Routes>
        //         <Route exact path="/" element={<App />} />
        //         <Route path="/calc" element={<Calculator />} />
        //     </Routes>
        // </BrowserRouter>
        <Calculator />
    )

}