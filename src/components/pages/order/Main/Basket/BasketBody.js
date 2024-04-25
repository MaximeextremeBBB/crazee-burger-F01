import React from "react";
import styled from "styled-components/macro";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import MainContext from "../../../../../context/MainContext";

export default function BasketBody() {
    const { newProductBasket, setNewProductBasket, basketList } =
        useContext(MainContext);
    // console.log(newProductBasket);
    // console.log(basketList);
    // console.log(basketList[0].title);

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
                    </div>
                );
            })}
            {/* )
            }  */}
        </BasketBodyStyled>
    );
}

const BasketBodyStyled = styled.div`
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
    overflow-y: scroll;

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
