import styled from "styled-components/macro";
import { theme } from "../../../../../theme";

export default function Basket() {
    return (
        <BasketStyled>
            <TopBasket>
                <div>
                    <span>Total</span>
                </div>
                <div>
                    <span>0,00 €</span>
                </div>
            </TopBasket>
            <MiddleBasket>Votre commande est vide.</MiddleBasket>
            <FooterBasket>
                <p>
                    Codé avec <HeartStyled> &hearts; </HeartStyled> et React.JS
                </p>
            </FooterBasket>
        </BasketStyled>
    );
}

const BasketStyled = styled.div`
    background: pink;
    /* display: block; */
    /* display: grid;
    grid-template-rows: 6.36% 90.63% 6.36%; */
    display: flex;
    flex-direction: column;
`;

const TopBasket = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 70px;
    color: ${theme.colors.primary};
    background: ${theme.colors.background_dark};

    font-weight: ${theme.fonts.weights.regular};
    line-height: 45.4px;
    padding-right: 16px;
    padding-left: 16px;
    letter-spacing: 2px;
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
`;
const HeartStyled = styled.span`
    color: red;
`;

const MiddleBasket = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex: 1;

    box-shadow: 0px 0px 20px 0px #00000033 inset;
    background: ${theme.colors.background_white};
    color: ${theme.colors.greyBlue};

    font-weight: ${theme.fonts.weights.regular};
    font-family: "Amatic SC", cursive;
    font-size: ${theme.fonts.size.P4};
    line-height: 72px;
`;

const FooterBasket = styled.div`
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Amatic SC", cursive;
    color: white;
    background: ${theme.colors.background_dark};
`;
