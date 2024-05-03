import React from "react";
import styled, { css } from "styled-components";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import BasketCard from "./BasketCard";
import { find } from "../../../../../utils/array";
import { checkIfProductIsClicked } from "../MainRightSide/Menu/helper";
import { theme } from "../../../../../theme";

export default function BasketProducts({
    basket,
    isModeAdmin,
    productSelected,
    setProductSelected,
    hasAlreadyBeenClicked,
    setIsCollapsed,
    setCurrentTabSelected,
    titleEditRef,
    handleDeleteBasketProduct,
    handleEditBasketAndMenu,
}) {
    const handleOnDelete = (id) => {
        handleDeleteBasketProduct(id);
    };

    // const handleOnEdit = (productBeingUpdated) => {
    //     console.log(productBeingUpdated);
    //     handleEditBasketAndMenu(productSelected);
    // };

    const handleClick = async (idProductClicked) => {
        if (!isModeAdmin) return;

        await setIsCollapsed(false);
        await setCurrentTabSelected("edit");
        const productClickedOn = find(idProductClicked, basket);

        await setProductSelected(productClickedOn);
        titleEditRef.current.focus();
    };

    return (
        <BasketProductsStyled>
            {basket.map((basketProduct) => (
                <div className="basket-card" key={basketProduct.id}>
                    <BasketCard
                        {...basketProduct}
                        imageSource={
                            basketProduct.imageSource
                                ? basketProduct.imageSource
                                : IMAGE_COMING_SOON
                        }
                        onDelete={() => handleOnDelete(basketProduct.id)}
                        onClick={() => handleClick(basketProduct.id)}
                        isModeAdmin={isModeAdmin}
                        isSelected={checkIfProductIsClicked(
                            basketProduct.id,
                            productSelected.id
                        )}
                    />
                </div>
            ))}
        </BasketProductsStyled>
    );
}

const BasketProductsStyled = styled.div`
    /* border: 1px solid red; */
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .basket-card {
        /* border: 1px solid blue; */
        margin: 10px 16px;
        height: 86px;
        box-sizing: border-box;
        :first-child {
            margin-top: 20px;
            /* border: 1px solid red; */
        }
        :last-child {
            margin-bottom: 20px;
        }
    }
`;


