import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NameContext } from "../../../App";
import OrderPage from "../order/OrderPage";
import "./LoginForm.css";
import { theme } from "../../../theme";
import burgerBg from "../../../../src/assets/F03 burger-background.jpg";
import logoOrange from "../../../../src/assets/F03 logo-orange.png";
import amaticSC from "../../../../src/assets/fonts/AmaticSC-Regular.ttf";
import openSans from "../../../../src/assets/fonts/OpenSans_Condensed-Medium.ttf";

const LoginForm = () => {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    const titreH2style = {
        // backgroundColor: "blue",
        margin: "60px",
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
    // return (
    //     // {/* <form action=""> */}

    //     <form action="submit" onSubmit={handleSubmit}>
    //         <div className="container-text">
    //             <h1 style={{ color: "red" }}>Bienvenue chez nous !</h1>
    //             {/* F03 présentation du ticket 17:35s Après le mot style il y a yne accolade c'est une interpolation jsx et donc on quitte le monde du jsx et on va dans du js la deuxième accolade , c'est pck c'est un objett js */}
    //             {/* F03 présentation du ticket 19:20s ne pas oublier les guillemets à red car c'est un objet js */}
    //             <br />
    //             <h2 style={titreH2style}>Connectez-vous</h2>
    //         </div>
    //         <input
    //             value={inputValue}
    //             type="text"
    //             onChange={handleChange}
    //             placeholder="Entrez votre prénom"
    //             required
    //             className="bonbon"
    //         />
    //         <input
    //             type="submit"
    //             // onClick={handleClick}
    //             value="Accédez à mon espace"
    //         />
    //         <br />
    //         {/* <a href="/order">Vers order page (anchor link)</a>{" "} */}
    //         {/*//l'inconvénient de cette méthode c'est qu'elle refresh la page avec le Link on a pas ce PropTypes.bool */}
    //         {/* <br /> */}
    //         {/* <Link to="/order">vers order page (Link)</Link> */}
    //     </form>
    // );
    return (
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <div className="container-text">
                {/* <TitleBackground> */}
                <TitleStyled>
                    <div className="left-part">CRAZEE</div>
                    <div className="middle-part">
                        <img src="${logoOrange}" alt="" />
                    </div>
                    <div className="right-part">BURGER</div>
                </TitleStyled>
                <h1>Bienvenue chez nous !</h1>
                {/* </TitleBackground> */}
                {/* F03 présentation du ticket 17:35s Après le mot style il y a yne accolade c'est une interpolation jsx et donc on quitte le monde du jsx et on va dans du js la deuxième accolade , c'est pck c'est un objett js */}
                {/* F03 présentation du ticket 19:20s ne pas oublier les guillemets à red car c'est un objet js */}
                <br />
                <h2 style={titreH2style}>Connectez-vous</h2>
            </div>
            <input
                value={inputValue}
                type="text"
                onChange={handleChange}
                placeholder="Entrez votre prénom"
                required
                className="bonbon"
            />
            <br />
            <input
                type="submit"
                // onClick={handleClick}
                value="Accédez à mon espace >"
            />
            <br />
            {/* <a href="/order">Vers order page (anchor link)</a>{" "} */}
            {/*//l'inconvénient de cette méthode c'est qu'elle refresh la page avec le Link on a pas ce PropTypes.bool */}
            {/* <br /> */}
            {/* <Link to="/order">vers order page (Link)</Link> */}
        </LoginFormStyled>
    );
};

// DEBUT DU COURS
// const LoginFormStyled = styled.form`
//     border: 1px solid red;
//     background: ${theme.colors.primary};
//     h1 {
//         font-size: 100px;
//     }
// `;
// // F03 live ama 47:06 styled est un objet qui lui en propriété il va avoir toutes les balises qui existes en HTML et jsx on peut mettre une div ou un lien ou un boton ou ect
// FIN DU COURS

// const TitleBackground = styled.div`
//     height: 1000px;
//     width: 100%;
// `;

const LoginFormStyled = styled.form`
    background: url("${burgerBg}") no-repeat center/cover;
    height: 100vh;
    text-align: center;
    @font-face {
        font-family: "openSans";
        src: url("${openSans}");
    }
    font-family: openSans, sans-serif;
    h1 {
        color: white;
        position: relative;
        display: block;
        margin: 50px auto;
        width: 30%;
        &:before {
            position: absolute;
            height: 1px;
            content: "";
            background: orange;
            width: 100%;
            margin: 0 -40px;
            transform: translateY(120px);
        }
    }
`;

const TitleStyled = styled.div`
    display: flex;
    justify-content: center;
    color: orange;
    @font-face {
        font-family: "amaticSC";
        src: url("${amaticSC}");
    }

    font-size: 50px;
    padding: 150px;
    font-family: amaticSC, sans-serif;
    font-weight: 700;
    font-style: normal;
    .left-part {
        width: 45%;
        text-align: right;
    }
    .middle-part {
        background: url("${logoOrange}") no-repeat center;
        height: 70px;
        background-size: 100% 100%;
        width: 10%;
        margin: 0 40px;
    }
    .right-part {
        width: 45%;
        text-align: left;
    }
`;
const hunStyled = styled.h1`
    color: white;
    background: red;
`;

export default LoginForm;
