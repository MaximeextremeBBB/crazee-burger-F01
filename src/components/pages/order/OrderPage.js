import { useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";

export default function OrderPage() {
    // state
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [currentTabSelected, setCurrentTabSelected] = useState("add");
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
    const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
    const titleEditRef = useRef();
    const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT;
    const { menu, handleAdd, handleDelete, handleEdit, resetMenu } = useMenu();
    const {
        basket,
        setBasket,
        handleAddToBasket,
        handleDeleteBasketProduct,
        handleEditBasketAndMenu,
    } = useBasket();

    const orderContextValue = {
        isModeAdmin,
        setIsModeAdmin,
        isCollapsed,
        setIsCollapsed,
        currentTabSelected,
        setCurrentTabSelected,
        menu,
        handleAdd,
        handleDelete,
        resetMenu,
        newProduct,
        setNewProduct,
        productSelected,
        setProductSelected,
        handleEdit,
        titleEditRef,
        basket,
        setBasket,
        handleAddToBasket,
        handleDeleteBasketProduct,
        handleEditBasketAndMenu,
        hasAlreadyBeenClicked,
    };

    //affichage
    return (
        <OrderContext.Provider value={orderContextValue}>
            <OrderPageStyled>
                <div className="container">
                    <Navbar />
                    <Main />
                </div>
            </OrderPageStyled>
        </OrderContext.Provider>
    );
}

const OrderPageStyled = styled.div`
    background: ${theme.colors.primary};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        background: red;
        height: 95vh;
        width: 1400px;
        display: flex;
        flex-direction: column;
        border-radius: ${theme.borderRadius.extraRound};
    }
`;
