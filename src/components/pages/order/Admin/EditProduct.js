import React, { useContext } from "react";
import styled from "styled-components";
import AddEditContext from "../../../../context/AddEditContext";
import AdminStateContext from "../../../../context/AdminStateContext";
import { theme } from "../../../../theme";
import { MdModeEditOutline } from "react-icons/md";

export default function EditProduct() {
    const { toggleProduct, setToggleProduct } = useContext(AddEditContext);
    const { setAdminState } = useContext(AdminStateContext);

    return (
        <EditProductStyled
            toggleProduct={toggleProduct}
            onClick={() => {
                setToggleProduct(false);
                setAdminState(true);
            }}
        >
            {/* <div className="edit">{EditIcon && EditIcon}</div> */}
            <div className="edit">
                <MdModeEditOutline />
            </div>
            <div className="label-edit">Modifier un produit</div>
        </EditProductStyled>
    );
}

const EditProductStyled = styled.div`
    width: 212px;
    height: 43px;
    /* background: dollar{theme.colors.white}; */
    background: ${(props) =>
        props.toggleProduct
            ? theme.colors.white
            : theme.colors.background_dark};

    /* color: dollar{theme.colors.greyLight}; */
    color: ${(props) =>
        props.toggleProduct ? theme.colors.greySemiDark : theme.colors.white};
    top: -46px;
    left: 171px;
    border-radius: 5px 5px 0px 0px;

    display: flex;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }

    .edit {
        margin-top: 13px;
        margin-bottom: 14px;
        margin-right: 13px;
        margin-left: 22px;
    }
    .label-edit {
        /* margin-right: 22px; */
        height: 22px;
        margin-top: 10px;
        margin-bottom: 11px;
    }
`;
