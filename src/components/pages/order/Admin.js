import React from "react";
import styled from "styled-components/macro";
import { theme } from "../../../theme";
import { IoChevronForward } from "react-icons/io5";

export default function Admin() {
    return (
        <AdminStyled>
            Admin
            <TestPosition>
                <IoChevronForward />
            </TestPosition>
        </AdminStyled>
    );
}

const AdminStyled = styled.div`
    background: red fixed;
    height: 100px;
    position: relative;
`;

const TestPosition = styled.div`
    content: "";
    position: absolute;
    width: 60px;
    height: 43px;
    background: ${theme.colors.white};
    top: -46px;
    left: 71px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.greyLight};
    border: 1px solid ${theme.colors.greyLight};
    border-radius: 5px 5px 0px 0px;
`;
