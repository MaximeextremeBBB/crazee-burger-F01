// import React from 'react';

// const LoginPage = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default LoginPage;

import React, { useState } from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

const LoginPage = () => {
    return (
        <LoginPageStyled>
            <Logo />
            <LoginForm />;
        </LoginPageStyled>
    );
};

const LoginPageStyled = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* 💡 Afin d'éviter toute l'implémentation avec le before et les propriétés qui vont avec, il existe la propriété : */

    /* background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(dollar{background}) */

    ::before {
        content: "";
        /* background: url(""); */
        background: url("/images/F03 burger-background.jpg") rgba(0, 0, 0, 0.7);
        background-size: cover;
        background-position: center;
        background-blend-mode: darken;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;

export default LoginPage;
