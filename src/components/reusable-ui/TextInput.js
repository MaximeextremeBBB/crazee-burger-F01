import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

export default function Input({ value, onChange, Icon, ...restProps }) {
    return (
        <div>
            <InputStyled>
                <div className="userCircle">
                    <FaRegUserCircle />
                </div>
                {Icon && Icon}
                {/* F03 partie 3 17:50 s'il ya une icone alors je mets l'icône en typescript on aurait eu une eeerreur si on avait pas mis ça   */}
                <input
                    value={value}
                    type="text"
                    onChange={onChange}
                    {...restProps}
                />
            </InputStyled>
        </div>
    );
}

const InputStyled = styled.div`
    border: 1px solid black;
    background: white;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 20%;
    border-radius: 5px;
    padding: 10px 0;
    .userCircle {
        margin: 0 10px;
    }
    input {
        width: 90%;
        border: none;
    }
`;
