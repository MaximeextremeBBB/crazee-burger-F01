import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../../context/OrderContext";
import { theme } from "../../../../../../theme";
import { formatPrice } from "../../../../../../utils/maths";
import Card from "../../../../../reusable-ui/Card";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import {
    EMPTY_PRODUCT,
    IMAGE_COMING_SOON,
} from "../../../../../../enums/product";
import { isEmpty } from "../../../../../../utils/array";
import { useParams } from "react-router-dom";
import { getUser } from "../../../../../../api/user";
import { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function Menu() {
    // export const Menu = async () => {
    const {
        menu,
        isModeAdmin,
        handleDelete,
        resetMenu,
        productSelected,
        setProductSelected,
        handleAddToBasket,
        handleDeleteBasketProduct,
        handleProductSelected,
    } = useContext(OrderContext);
    const { username } = useParams();

    // state

    // comportements (gestionnaires d'événement ou "event handlers")
    const handleCardDelete = (event, idProductToDelete) => {
        event.stopPropagation();
        handleDelete(idProductToDelete);
        handleDeleteBasketProduct(idProductToDelete);
        idProductToDelete === productSelected.id &&
            setProductSelected(EMPTY_PRODUCT);
    };

    const handleAddButton = (event, idProductToAdd) => {
        event.stopPropagation();
        handleAddToBasket(idProductToAdd);
    };

    // const activateUser = async (username) => {
    //     // const existingUser = await getUser(username);
    //     // console.log("existingUser : ", existingUser.menu);
    //     // return existingUser.menu;
    //     return "bou";
    // };
    // const tab = activateUser(username);

    // useEffect(async () => {
    //     const menuReceived = await getUser(username);
    //     console.log("menuReceived : ", menuReceived);
    //     // setMenu(menuReceived);
    // }, []);

    // affichage
    // if (isEmpty(getUser(username))) {
    //     if (!isModeAdmin) return <EmptyMenuClient />;
    //     return <EmptyMenuAdmin onReset={resetMenu} />;
    // }

    return (
        <TransitionGroup component={MenuStyled} className={"transition-group"}>
            {/* <MenuStyled className="menu"> */}
            {menu.map(({ id, title, imageSource, price }) => {
                return (
                    <CSSTransition
                        appear={true}
                        classNames={"menu-animated"}
                        key={id}
                        timeout={150}
                    >
                        <Card
                            key={id}
                            title={title}
                            imageSource={
                                imageSource ? imageSource : IMAGE_COMING_SOON
                            }
                            leftDescription={formatPrice(price)}
                            hasDeleteButton={isModeAdmin}
                            onDelete={(event) => handleCardDelete(event, id)}
                            onClick={
                                isModeAdmin
                                    ? () => handleProductSelected(id)
                                    : null
                            }
                            isHoverable={isModeAdmin}
                            isSelected={checkIfProductIsClicked(
                                id,
                                productSelected.id
                            )}
                            onAdd={(event) => handleAddButton(event, id)}
                        />
                    </CSSTransition>
                );
            })}
            {/* </MenuStyled> */}
        </TransitionGroup>
    );
}

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    overflow-y: scroll;

    /* .menu-animated-appear {
        opacity: 0%;
    }
    .menu-animated-appear-active {
        opacity: 100%;
        transition: 300ms;
    } */

    .menu-animated-enter {
        transform: translateX(-100%);
    }
    .menu-animated-enter-active {
        transform: translateX(0%);
        transition: 75ms;
    }
    .menu-animated-enter-done {
    }
    .menu-animated-exit {
        opacity: 100%;
        transition: 75ms;
    }

    .menu-animated-exit-active {
        opacity: 0%;
        transition: 75ms;
    }
    .menu-animated-exit-done {
    }
`;
