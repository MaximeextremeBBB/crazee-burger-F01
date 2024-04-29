import React from "react";
import styled from "styled-components/macro";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import MainContext from "../../../../../context/MainContext";
import { TiDelete } from "react-icons/ti";

export default function BasketBody() {
    const { newProductBasket, basketList, handleRemoveItemFromBasket } =
        useContext(MainContext);

    const handleBasketDelete = (event, idProductToDelete) => {
        event.stopPropagation();
        handleRemoveItemFromBasket(idProductToDelete, event);
        // idProductToDelete === productSelected.id &&
        //     setProductSelected(EMPTY_PRODUCT);
    };

    return (
        <BasketBodyStyled>
            {newProductBasket.title === "" ? (
                <span className="empty-message">Votre commande est vide.</span>
            ) : (
                ""
            )}

            {basketList.map(({ id, title, imageSource, price }) => {
                return (
                    <div key={id} className="basket-content">
                        {/* {id === "" ? (
                            console.log("id = chaine vide: ", id)
                        ) : ( ""
                              )} */}
                        <div className="imageSource">
                            <img
                                src={imageSource}
                                alt="picture of the selected product"
                            />
                        </div>
                        <div>
                            <div className="title">{title}</div>
                            <div className="price">{price}</div>
                        </div>
                        <div className="quantity">x 1</div>
                        <div>
                            <button
                                className="delete-button"
                                aria-label="delete-button"
                                onClick={(event) =>
                                    handleBasketDelete(event, id)
                                }
                            >
                                <TiDelete className="icon" />
                            </button>
                        </div>
                    </div>
                );
            })}
        </BasketBodyStyled>
    );
}

const BasketBodyStyled = styled.div`
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};

    overflow-y: scroll;

    scrollbar-color: transparent transparent;

    &:hover {
        scrollbar-color: initial;
    }

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
