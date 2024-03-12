import React from "react";
import styled from "styled-components";

export default function PrimaryButton({ label, Icon }) {
    return (
        <PrimaryButtonStyled className="">
            <span> {label}</span>
            <input
                type="submit"
                // onClick={handleClick}
                value="Accédez à mon espace >"
            />
        </PrimaryButtonStyled>
    );
}

const PrimaryButtonStyled = styled.button`
    background: white;
    border: 1px solid orange;
    margin: 0 auto;
    padding: 10px 0;
    width: 20%;
    cursor: pointer;
    input {
        background: white;
        border: none;
        color: orange;
        border-radius: 5px;
    }
`;
