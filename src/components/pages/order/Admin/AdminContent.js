import React from "react";
import styled from "styled-components";

export default function AdminContent({ toggleProduct }) {
    return (
        <div>
            {toggleProduct ? (
                <AdminContentStyled>Ajouter un produit</AdminContentStyled>
            ) : (
                <AdminContentStyled>Edit Product</AdminContentStyled>
            )}
        </div>
    );
}

const AdminContentStyled = styled.div`
    background: red fixed;
    height: 100px;
    opacity: hidden;
`;
