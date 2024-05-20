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
            <TransitionGroup component={"h1"} className={"transition-group"}>
                {basket.map((basketProduct) => {
                    const menuProduct = findObjectById(basketProduct.id, menu);
                    return (
                        <CSSTransition
                            appear={true}
                            classNames={"basket-cad-animated"}
                            key={basketProduct.id}
                            timeout={{ enter: 500, exit: 500 }}
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
                                    className={"pomme"}
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

    .basket-cad-animated-appear {
        .pomme {
            transform: translateX(100%);
        }
    }
    .basket-cad-animated-appear-active {
        .pomme {
            transform: translateX(0%);
            transition: 300ms;
        }
    }

    .basket-cad-animated-enter {
        .pomme {
            transform: translateX(100%);
        }
    }
    .basket-cad-animated-enter-active {
        .pomme {
            transform: translateX(0%);
            transition: 300ms;
        }
    }
    .basket-cad-animated-enter-done {
        .pomme {
        }
    }
    .basket-cad-animated-exit {
        .pomme {
            transform: translateX(0%);
            transition: 300ms;
        }
    }
    .basket-cad-animated-exit-active {
        .pomme {
            transform: translateX(-100%);
            transition: 300ms;
        }
    }
    .basket-cad-animated-exit-done {
        .pomme {
        }
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
