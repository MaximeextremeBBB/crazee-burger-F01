import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import BasketCard from "./BasketCard";
import OrderContext from "../../../../../context/OrderContext";
import { findObjectById } from "../../../../../utils/array";
import { checkIfProductIsClicked } from "../MainRightSide/Menu/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function BasketProducts() {
    const {
        basket,
        isModeAdmin,
        handleDeleteBasketProduct,
        menu,
        handleProductSelected,
        productSelected,
    } = useContext(OrderContext);

    const handleOnDelete = (event, id) => {
        event.stopPropagation();
        handleDeleteBasketProduct(id);
    };

    return (
        <BasketProductsStyled>
            <TransitionGroup component={"h1"} className={transition - group}>
                {basket.map((basketProduct) => {
                    const menuProduct = findObjectById(basketProduct.id, menu);
                    return (
                        <CSSTransition
                            appear={true}
                            classNames={"abricot"}
                            key={basketProduct.id}
                            timeout={{ enter: 5000, exit: 5000 }}
                        >
                            <div className="basket-card">
                                <BasketCard
                                    {...menuProduct}
                                    imageSource={
                                        menuProduct.imageSource
                                            ? menuProduct.imageSource
                                            : IMAGE_COMING_SOON
                                    }
                                    quantity={basketProduct.quantity}
                                    onDelete={(event) =>
                                        handleOnDelete(event, basketProduct.id)
                                    }
                                    isClickable={isModeAdmin}
                                    onClick={
                                        isModeAdmin
                                            ? () =>
                                                  handleProductSelected(
                                                      basketProduct.id
                                                  )
                                            : null
                                    }
                                    isSelected={checkIfProductIsClicked(
                                        basketProduct.id,
                                        productSelected.id
                                    )}
                                    className={pomme}
                                />
                            </div>
                        </CSSTransition>
                    );
                })}
            </TransitionGroup>
        </BasketProductsStyled>
    );
}

const BasketProductsStyled = styled.div`
    /* border: 1px solid red; */
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .abricot-enter {
        background: green;
    }
    .abricot-enter-active {
        pomme {
            background: blue;
            transition: 2s;
        }
    }
    .abricot-enter-done {
        pomme {
            background: pink;
            transition: 2s;
        }
    }
    .abricot-exit-active {
    }
    .abricot-exit-done {
    }

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
