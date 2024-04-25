import styled from "styled-components";
import { theme } from "../../../../theme";
import MainRightSide from "./MainRightSide/MainRightSide";
import Basket from "./Basket/Basket";
import MainContext from "../../../../context/MainContext";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import { useState } from "react";

export default function Main() {
    const [basketList, setBasketList] = useState(EMPTY_PRODUCT);
    const [newProductBasket, setNewProductBasket] = useState(EMPTY_PRODUCT);

    const handleAddBasket = (newProduct) => {
        // // 1. copie du tableau
        // const menuCopy = deepClone(menu);
        // // 2. manip de la copie du tableau
        // const menuUpdated = [newProduct, ...menuCopy];
        // // 3. update du state
        // setMenu(menuUpdated);
    };
    const mainContextValue = {
        handleAddBasket,
        basketList,
        setBasketList,
        newProductBasket,
        setNewProductBasket,
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
