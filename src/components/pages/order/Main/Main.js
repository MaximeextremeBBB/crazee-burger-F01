import styled from "styled-components";
import { theme } from "../../../../theme";
import MainRightSide from "./MainRightSide/MainRightSide";
import Basket from "./Basket/Basket";
import MainContext from "../../../../context/MainContext";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import { useState } from "react";

export default function Main() {
    const [basketList, setBasketList] = useState([]);
    const [newProductBasket, setNewProductBasket] = useState(EMPTY_PRODUCT);

    const handleAddBasket = (newProductBasket) => {
        console.log(basketList);
        const basketListCopy = [...basketList];
        console.log(basketList);

        // 2. manip de la copie du tableau
        const basketListUpdated = [newProductBasket, ...basketListCopy];

        // 3. update du state

        setBasketList(basketListUpdated);

        console.log(basketList);
    };
    const mainContextValue = {
        handleAddBasket,
        basketList,
        setBasketList,
        newProductBasket,
        setNewProductBasket,
        handleAddBasket,
    };

    return (
        <MainContext.Provider value={mainContextValue}>
            <MainStyled>
                <Basket />
                <MainRightSide />
            </MainStyled>
        </MainContext.Provider>
    );
}

const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    height: calc(95vh - 10vh);

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    display: grid;
    grid-template-columns: 25% 1fr;
    overflow: hidden;
`;
