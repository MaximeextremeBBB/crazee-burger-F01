import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

export default function IconsPosition({
    ChevronDownIcon,
    ChevronUpIcon,
    setAdminState,
    adminState,
}) {
    return (
        <IconsPositionStyled>
            <ChevronUpPositionStyled
                onClick={() => setAdminState(!adminState)}
                adminState={adminState}
            >
                {adminState ? ChevronDownIcon : ChevronUpIcon}
            </ChevronUpPositionStyled>
            <AddProduct />
            <EditProduct />
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
    /* color: dollar{theme.colors.greyLight}; */
    color: ${(props) =>
        props.adminState ? theme.colors.greySemiDark : theme.colors.white};

    border: 1px solid ${theme.colors.greyLight};
    border-radius: 5px 5px 0px 0px;

    &:hover {
        cursor: pointer;
    }
`;
