import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import MainContext from "../../../../../context/MainContext";

export default function BasketBody() {
    const { newProductBasket, setNewProductBasket, basketList, setBasketList } =
        useContext(MainContext);
    // console.log(newProductBasket);
    // const basketList = [];
    // console.log(basketList);

    // const basketListCopy = [
    //     {
    //         ...basketList,
    //     },
    // ];

    // console.log(basketListCopy);
    // 1. copie du tableau
    // const menuCopy = deepClone(menu);

    // 2. manip de la copie du tableau
    // const basketListUpdated = [newProductBasket, ...basketListCopy];

    // const basketListUpdated = [...basketListCopy];

    // 3. update du state

    // setBasketList(basketListUpdated);

    // const newProductToAdd = {
    //     ...newProduct,
    //     id: crypto.randomUUID(),
    // };

    // console.log(basketList);

    return (
        <BasketBodyStyled>
            {newProductBasket.title === "" ? (
                <span className="empty-message">Votre commande est vide.</span>
            ) : (
                <div className="basket-content">
                    <div className="imageSource">
                        <img
                            src={newProductBasket.imageSource}
                            alt="picture of the selected product"
                        />
                    </div>
                    <div>
                        <div className="title">{newProductBasket.title}</div>
                        <div className="price">{newProductBasket.price}</div>
                    </div>
                    <div className="quantity">x 1</div>
                </div>
            )}
        </BasketBodyStyled>
    );
}

const BasketBodyStyled = styled.div`
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};

    .empty-message {
        display: flex;
        height: calc(95vh - 10vh - 70px - 70px);
        text-align: center;
        flex: 1;
        justify-content: center;
        align-items: center;
        align-self: center;
        line-height: 2;
        font-family: ${theme.fonts.family.stylish};
        font-size: ${theme.fonts.size.P4};
        color: ${theme.colors.greyBlue};
    }
    .basket-content {
        margin: 40px;
        border: 1px solid red;
        background: white;

        display: flex;
        align-items: center;
        img {
            width: 70px;
            height: 70px;
            object-fit: contain;
            object-position: center;
        }
    }
`;
