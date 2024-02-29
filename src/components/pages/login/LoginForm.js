import React, { useState } from "react";

const LoginForm = () => {
    const [inputValue, setInputValue] = useState("");
    // test

    const handleChange = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Bonjour " + inputValue);
        setInputValue("");
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
        </form>
    );
};

export default LoginForm;
