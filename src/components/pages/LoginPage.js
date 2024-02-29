// import React from 'react';

// const LoginPage = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default LoginPage;

import React from "react";

const LoginPage = () => {
    const [message, setMessage] = useState("");
    const handleChange = (event) => {
        setMessage(event.target.value);
        console.log(event.target.value);
    };

    const handleClick = (event) => {
        if (message != "") {
            alert("Bonjour" + message);
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
                    </p>
                </div>
                <div className="login">
                    <div>
                        <h3>Connectez-vous</h3>
                    </div>
                </div>
                <form action="">
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Entrez votre prénom"
                    />
                    <input
                        type="submit"
                        onClick={handleClick}
                        value="Accédez à votre espace"
                    />
                </form>
            </header>
        </div>
    );
};

export default LoginPage;
