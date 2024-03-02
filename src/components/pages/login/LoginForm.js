import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NameContext } from "../../../App";
import OrderPage from "../order/OrderPage";

const LoginForm = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    // test

    const handleChange = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setInputValue("");
        <OrderPage data={inputValue} />;
        navigate("order");
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (inputValue !== "") {
            alert("Bonjour " + inputValue);
        } else {
            alert("Veuillez rentrez un nom s'il vous plaît");
        }
    };
    return (
        // {/* <form action=""> */}

        <form action="submit" onSubmit={handleSubmit}>
            <OrderPage data={inputValue} />
            <h1>Bienvenue chez nous !</h1>
            <br />
            <h2>Connectez-vous</h2>
            <input
                value={inputValue}
                type="text"
                onChange={handleChange}
                placeholder="Entrez votre prénom..."
                required
            />
            <input
                type="submit"
                // onClick={handleClick}
                value="Accédez à votre espace"
            />
            <a href="/order">Vers order page (anchor link)</a> //l'inconvénient
            de cette méthode c'est qu'elle refresh la page avec le Link on a pas
            ce PropTypes.bool
            <Link to="/order">vers orer page (Link)</Link>
        </form>
    );
};

export default LoginForm;
