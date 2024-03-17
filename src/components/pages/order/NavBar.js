import React from "react";
import Logo from "../../reusable-ui/Logo";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function NavBar({ username, Icon }) {
    return (
        <NavBarStyled>
            <div className="left-side">
                <Logo />
            </div>
            <div className="right-side">
                <div className="log-out">
                    <h1>
                        Hey, <UsernameStyled>{username}</UsernameStyled>
                    </h1>
                    <Link to="/">
                        <button>Se déconnecter</button>
                    </Link>
                </div>
                <div className="icon">{Icon && Icon}</div>
            </div>
        </NavBarStyled>
    );
}

const NavBarStyled = styled.div`
    background: ${theme.colors.white};
    height: 98.19px;
    display: flex;
    justify-content: space-between;
    /* margin: 100px auto; */
    text-align: center;
    width: 100%;
    max-width: 1400px;
    .left-side {
        background: ${theme.colors.white};
        padding: 0 20px;
        img {
            transform: scale(1);
        }
    }
    .right-side {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: right;
        /* height: 44px; */
        /* gap: 10px; */
        padding: 0 70px;
        .log-out {
            /* height: 44px; */
            padding: 0 20px;
            h1 {
                font-size: 16px;
                font-weight: 400;
                line-height: 22px;
                margin: 0;
            }
            button {
                background: ${theme.colors.white};
                border: none;
                cursor: pointer;
            }
        }
        .icon {
            transform: scale(1.6);
        }
    }
`;
const UsernameStyled = styled.span`
    color: ${theme.colors.primary};
    font-weight: 700;
`;
