import styled from "styled-components";
import { theme } from "../../../../theme";
import MainRightSide from "./MainRightSide/MainRightSide";
import Basket from "./Basket/Basket";
import MainContext from "../../../../context/MainContext";
import { EMPTY_PRODUCT } from "../../../../enums/product";
import { useState } from "react";
import { fakeBasket } from "../../../../fakeData/fakeBasket";

export default function Main() {
    const [basketList, setBasketList] = useState([]);
    const [newProductBasket, setNewProductBasket] = useState(fakeBasket.EMPTY);
    const [totalPrice, setTotalPrice] = useState(0);
    // console.log(basketList);
    // console.log("nPBIn MAIN BeforeFuction : ", newProductBasket.title);

    const handleAddBasket = (newProductBasketInMenu) => {
        const basketListCopy = [...basketList];
        console.log("nPBIn MAIN InFuction : ", newProductBasketInMenu.title);
        // console.log("nPBIn MAIN InFuction : ", newProductBasket.title);

        // 2. manip de la copie du tableau
        const basketListUpdated = [newProductBasketInMenu, ...basketListCopy];

        // 3. update du state

        setBasketList(basketListUpdated);
        setTotalPrice(totalPrice + newProductBasketInMenu.price);
    };

    const handleRemoveItemFromBasket = (idToRemove, event) => {
        event.preventDefault();
        const basketListCopy = [...basketList];
        const productToRemovePrice = basketList.find(
            (basket) => (basket.id = idToRemove)
        );
        console.log("productToRemovePrice : ", productToRemovePrice);
        const updatedCartItems = basketListCopy.filter(
            (basketList) => basketList.id !== idToRemove
        );
        console.log("updateCardItem : ", updatedCartItems);
        setBasketList(updatedCartItems);

        setTotalPrice(totalPrice - productToRemovePrice.price);
    };

    const mainContextValue = {
        handleAddBasket,
        basketList,
        setBasketList,
        newProductBasket,
        setNewProductBasket,
        totalPrice,
        handleRemoveItemFromBasket,
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
