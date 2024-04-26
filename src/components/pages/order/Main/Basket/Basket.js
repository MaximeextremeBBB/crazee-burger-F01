import styled from "styled-components";
import Total from "./Total";
import { formatPrice } from "../../../../../utils/maths";
import Footer from "./Footer";
import BasketBody from "./BasketBody";
import MainContext from "../../../../../context/MainContext";
import { useContext } from "react";

export default function Basket() {
    const { newProductBasket, totalPrice } = useContext(MainContext);
    const newPrice = newProductBasket.price;

    console.log(totalPrice);

    console.log();
    return (
        <BasketStyled>
            <Total amountToPay={formatPrice(totalPrice)} />
            <BasketBody />
            <Footer />
        </BasketStyled>
    );
}

const BasketStyled = styled.div`
    background: pink;
    display: flex;
    flex-direction: column;
`;
