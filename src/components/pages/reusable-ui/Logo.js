import React from "react";
import styled from "styled-components";

export default function Logo() {
    return (
        <LoginStyled>
            <h1 className="left-part">CRAZEE</h1>
            <div className="middle-part">
                <img
                    src="/images/F03 logo-orange.png"
                    alt="logo-crazee-burger"
                />
            </div>
            <h1 className="right-part">BURGER</h1>
        </LoginStyled>
    );
}

const LoginStyled = styled.div`
    display: flex;
    align-items: center;
    transform: scale(2.5);
    h1 {
        display: inline;
        text-align: center;
        color: #ffa01b;
        font-size: 36px;
        line-height: 1em;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-family: "Amatic SC", cursive;
    }
    img {
        object-fit: contain;
        object-position: center;
        height: 60px;
        width: 80px;
        margin: 0 5px;
    }
`;
