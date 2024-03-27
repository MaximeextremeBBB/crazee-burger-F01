import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import Admin from "./Admin/Admin";
import { useState } from "react";
import OrderContext from "../../../context/OrderContext";

export default function OrderPage() {
    // state
    const { username } = useParams();
    const [isModeAdmin, setIsModeAdmin] = useState(false);

    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,
    };

    // comportements

    //affichage
    return (
        <OrderContext.Provider value={orderContextValue}>
            <OrderPageStyled>
                <div className="container">
                    <Navbar username={username} />
                    <Main />
                    <Admin />
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
    );
}

const OrderPageStyled = styled.div`
    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
    }
`;
