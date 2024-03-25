import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function IconsPosition({
    ChevronDownIcon,
    ChevronUpIcon,
    PlusIcon,
    EditIcon,
    handleState,
    toggleProduct,
    adminState,
    setAdminState,
    ajouterProduitFunction,
    editerProduitFunction,
}) {
    return (
        <IconsPositionStyled>
            <ChevronUpPositionStyled
                onClick={handleState}
                adminState={adminState}
            >
                {adminState ? ChevronDownIcon : ChevronUpIcon}
            </ChevronUpPositionStyled>
            {/* <AddProductStyled onClick={ajouterProduitFunction}> */}
            <AddProductStyled
                toggleProduct={toggleProduct}
                onClick={() => {
                    ajouterProduitFunction();
                    setAdminState(true);
                }}
            >
                {/* // onClick={() => { func1(); func2();} */}
                <div className="plus">{PlusIcon && PlusIcon}</div>
                <div className="label-plus">Ajouter un produit</div>
            </AddProductStyled>
            <EditProductStyled
                toggleProduct={toggleProduct}
                onClick={() => {
                    editerProduitFunction();
                    setAdminState(true);
                }}
            >
                <div className="edit">{EditIcon && EditIcon}</div>
                <div className="label-edit">Modifier un produit</div>
            </EditProductStyled>
        </IconsPositionStyled>
    );
}

const IconsPositionStyled = styled.div`
    position: absolute;
    width: 100%;
    height: 44px;
    top: -46px;
    display: flex;
    align-items: center;
`;

const ChevronUpPositionStyled = styled.button`
    margin-left: 71px;
    height: 43px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    /* background: dollar{theme.colors.white}; */
    background: ${(props) =>
        props.adminState ? theme.colors.white : theme.colors.background_dark};
    color: ${theme.colors.greyLight};
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 5px 5px 0px 0px;

    &:hover {
        cursor: pointer;
    }
`;

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

    &:focus {
        background: red;
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
