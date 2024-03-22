import React from "react";
import styled from "styled-components/macro";
import { theme } from "../../../theme";
import { IoChevronDown } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

export default function Admin() {
    return (
        <AdminStyled>
            Admin
            <IconsPosition>
                <ChevronUpPositionStyled>
                    <IoChevronDown />
                </ChevronUpPositionStyled>
                <AddProductStyled>
                    <div>
                        <AiOutlinePlus />
                    </div>
                    <div>Ajouter un Produit</div>
                </AddProductStyled>
            </IconsPosition>
        </AdminStyled>
    );
}

const AdminStyled = styled.div`
    background: red fixed;
    height: 100px;
    position: relative;
`;

const IconsPosition = styled.div`
    position: absolute;
    width: 100%;
    height: 44px;
    top: -46px;
    display: flex;
    align-items: center;
`;

const ChevronUpPositionStyled = styled.div`
    margin-left: 71px;
    height: 43px;
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.white};
    color: ${theme.colors.greyLight};
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 5px 5px 0px 0px;
`;

const AddProductStyled = styled.div`
    width: 212.02px;
    height: 43px;
    background: ${theme.colors.background_dark};
    top: -46px;
    left: 171px;
    color: ${theme.colors.white};

    display: flex;
    justify-content: center;
    align-items: center;
`;
