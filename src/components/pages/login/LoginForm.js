import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NameContext } from "../../../App";
import OrderPage from "../order/OrderPage";
import "./LoginForm.css";

const LoginForm = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    const titreH2style = {
        backgroundColor: "blue",
        color: "white",
        fontSize: 25,
    };

    // test

    const handleChange = (e) => {
        setInputValue(e.target.value);
        // console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue("");
        <OrderPage data={inputValue} />;
        navigate(`order/${inputValue}`);
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
            <h1 style={{ color: "red" }}>Bienvenue chez nous !</h1>
            {/* F03 présentation du ticket 17:35s Après le mot style il y a yne accolade c'est une interpolation jsx et donc on quitte le monde du jsx et on va dans du js la deuxième accolade , c'est pck c'est un objett js */}
            {/* F03 présentation du ticket 19:20s ne pas oublier les guillemets à red car c'est un objet js */}
            <br />
            <h2 style={titreH2style}>Connectez-vous</h2>
            <input
                value={inputValue}
                type="text"
                onChange={handleChange}
                placeholder="Entrez votre prénom..."
                required
                className="bonbon"
            />
            <input
                type="submit"
                // onClick={handleClick}
                value="Accédez à votre espace"
            />
            <br />
            {/* <a href="/order">Vers order page (anchor link)</a>{" "} */}
            {/*//l'inconvénient de cette méthode c'est qu'elle refresh la page avec le Link on a pas ce PropTypes.bool */}
            {/* <br /> */}
            {/* <Link to="/order">vers order page (Link)</Link> */}
        </form>
    );
};

export default LoginForm;
