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
import Input from "../../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

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
            {/* <div className="container-text"> */}
            {/* <TitleBackground> */}

            <ContentStyled>
                <h1>Bienvenue chez nous !</h1>
                {/* </TitleBackground> */}
                {/* F03 présentation du ticket 17:35s Après le mot style il y a yne accolade c'est une interpolation jsx et donc on quitte le monde du jsx et on va dans du js la deuxième accolade , c'est pck c'est un objett js */}
                {/* F03 présentation du ticket 19:20s ne pas oublier les guillemets à red car c'est un objet js */}
                <hr />
                <h2 style={titreH2style}>Connectez-vous</h2>
            </ContentStyled>
            {/* </div> */}

            <br />
            <TextInput
                value={inputValue}
                onChange={handleChange}
                placeholder={"Entrez votre prénom"}
                Icon=<BsPersonCircle className="icon" />
                required
            />
            <PrimaryButton
                label={"Accèder à mon espace"}
                Icon={<BsPersonCircle />}
                className="icon"
            >
                <input
                    type="submit"
                    // onClick={handleClick}
                    value="Accédez à mon espace >"
                />
            </PrimaryButton>
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
    background: green;
    max-width: 500px;
    min-width: 400px;
    margin: 0 auto;
    padding: 40px ${theme.spacing.lg};
    border-radius: ${theme.borderRadius.round};
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    @font-face {
        font-family: "openSans";
        src: url("${openSans}");
    }
    font-family: openSans, sans-serif;
    hr {
        border: 1px solid ${theme.colors.loginLine};
        margin-bottom: ${theme.gridUnit * 5}px;
    }
    h1 {
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P5}px;
    }
    h2 {
        color: #8e8b8b;
        margin: 20px 10px 10px;
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.P4}px;
    }
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${theme.fonts.size.P0}px;
        margin-left: ;
    }
`;

const ContentStyled = styled.div`
    position: relative;
    h1 {
        color: white;
        /* position: relative; */
        display: block;
        margin: 50px auto;
        &:before {
            position: absolute;
            height: 1px;
            content: "";
            background: orange;
            width: 20%;
            margin: 0 -20px;
            transform: translateY(120px);
        }
    }
`;

export default LoginForm;
