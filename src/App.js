import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
// import "./App.css";

function App() {
    return (
        // <LoginPage />
        // <Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="order/:username" element={<OrderPage />} />{" "}
            {/*le /: signifie qu'on peut lui ajouter des variables après le slash */}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        // </Router>
    );
}

export default App;
