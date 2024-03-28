import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function AdminContent({ toggleProduct }) {
    // console.log(toggleProduct);
    return (
        <div>
            {toggleProduct ? (
                <AdminContentStyled>Ajouter un produit</AdminContentStyled>
            ) : (
                <AdminContentStyled>Modifier un Produit</AdminContentStyled>
            )}
        </div>
    );
}

const AdminContentStyled = styled.div`
    background: ${theme.colors.white} fixed;
    height: 250px;
    padding-left: 21px;
    padding-top: 16.5px;
`;
