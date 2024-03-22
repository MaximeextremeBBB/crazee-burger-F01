import React, { useState } from "react";
import styled from "styled-components/macro";
import { theme } from "../../../../theme";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import IconsPosition from "./IconsPosition";

export default function Admin() {
    const [adminState, setAdminState] = useState(true);

    const handleState = () => {
        setAdminState(!adminState);
    };

    return (
        <AdminStyled>
            <IconsPosition
                ChevronDownIcon={<IoChevronDown className="icon" />}
                ChevronUpIcon={<IoChevronUp className="icon" />}
                PlusIcon={<AiOutlinePlus className="icon" />}
                EditIcon={<MdEdit className="icon" />}
                handleState={handleState}
            />

            {adminState ? <AdminContentStyled>Admin</AdminContentStyled> : ""}
        </AdminStyled>
    );
}

const AdminStyled = styled.div`
    position: relative;
`;

const AdminContentStyled = styled.div`
    background: red fixed;
    height: 100px;
    opacity: hidden;
`;
