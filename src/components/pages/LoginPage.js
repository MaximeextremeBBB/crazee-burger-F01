// import React from 'react';

// const LoginPage = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default LoginPage;

import React, { useState } from "react";

const LoginPage = () => {
    const [inputValue, setInputValue] = useState("");

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
        <div className="App">
            <header className="App-header">
                <div>
                    <p>
                        {" "}
                        <h1>Bienvenue chez nous !</h1>
                        <br />
                    </p>
                </div>
                <div className="login">
                    <div>
                        <h3>Connectez-vous</h3>
                    </div>
                </div>
                {/* <form action=""> */}
                <form action="submit" onSubmit={handleSubmit}>
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
            </header>
        </div>
    );
};

export default LoginPage;
