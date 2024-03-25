import React, { useContext } from "react";
import { theme } from "../../../../theme";
import styled from "styled-components";
import AddEditContext from "../../../../context/AddEditContext";
import AdminStateContext from "../../../../context/AdminStateContext";
import { AiOutlinePlus } from "react-icons/ai";

export default function AddProduct() {
    const { toggleProduct, setToggleProduct } = useContext(AddEditContext);
    // console.log(toggleProduct);
    // console.log(setToggleProduct);
    const { setAdminState } = useContext(AdminStateContext);
    // const [plusIcon] = useContext(PlusIconcontext);

    return (
        <AddProductStyled
            toggleProduct={toggleProduct}
            onClick={() => {
                setToggleProduct(true);
                setAdminState(true);
            }}
        >
            {/* // onClick={() => { func1(); func2();} */}
            {/* <div className="plus">{PlusIcon && PlusIcon}</div> */}
            <div className="plus">{<AiOutlinePlus />}</div>
            <div className="label-plus">Ajouter un produit</div>
        </AddProductStyled>
    );
}

const AddProductStyled = styled.div`
    width: 212.02px;
    height: 43px;
    /* background: dollar{theme.colors.background_dark}; */
    background: ${(props) =>
        props.toggleProduct
            ? theme.colors.background_dark
            : theme.colors.white};
    top: -46px;
    left: 171px;
    /* color: dollar{theme.colors.white}; */
    color: ${(props) =>
        props.toggleProduct ? theme.colors.white : theme.colors.greySemiDark};

    display: flex;
    /* justify-content: center;
    align-items: center; */

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    border-radius: 5px 5px 0px 0px;
    .plus {
        margin-top: 13px;
        margin-bottom: 14px;
        margin-right: 13px;
        margin-left: 22px;
    }
    .label-plus {
        /* margin-right: 22px; */
        height: 22px;
        margin-top: 10px;
        margin-bottom: 11px;
    }
`;
