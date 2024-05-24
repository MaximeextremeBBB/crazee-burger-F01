import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import OrderContext from "../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findObjectById } from "../../../utils/array";
import { useParams } from "react-router-dom";
import { initialiseUserSession } from "./helpers/initialiseUserSession";
import { useHandleChangeSelect } from "../../../hooks/useHandleChangeSelect";

export default function OrderPage() {
    // state
    const [isModeAdmin, setIsModeAdmin] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [currentTabSelected, setCurrentTabSelected] = useState("add");
    const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
    const [changeAds, setChangeAds] = useState("sans-pub");
    const [changeAvailable, setChangeAvailable] = useState("en-stock");
    const [productSelected, setProductSelected] = useState(EMPTY_PRODUCT);
    const titleEditRef = useRef();
    const { menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu } =
        useMenu();
    // const {
    // handleChangeSelect,
    // changeAds,
    // setChangeAds,
    // changeAvailable,
    // setChangeAvailable,
    // } = useHandleChangeSelect();
    const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } =
        useBasket();
    const { username } = useParams();

    const handleProductSelected = async (idProductClicked) => {
        const productClickedOn = findObjectById(idProductClicked, menu);
        await setIsCollapsed(false);
        await setCurrentTabSelected("edit");
        await setProductSelected(productClickedOn);
        titleEditRef.current.focus();
    };

    useEffect(() => {
        initialiseUserSession(username, setMenu, setBasket);
    }, []);

    const orderContextValue = {
        username,
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
        handleAddToBasket,
        handleDeleteBasketProduct,
        handleProductSelected,
        changeAvailable,
        changeAds,
        setChangeAvailable,
        setChangeAds,
    };

    //affichage (render)
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
