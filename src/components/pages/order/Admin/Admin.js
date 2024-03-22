import React from "react";
import styled from "styled-components/macro";
import { theme } from "../../../../theme";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import IconsPosition from "./IconsPosition";

export default function Admin() {
    return (
        <AdminStyled>
            Admin
            <IconsPosition
                ChevronDownIcon={<IoChevronDown className="icon" />}
                ChevronUpIcon={<IoChevronUp className="icon" />}
                PlusIcon={<AiOutlinePlus className="icon" />}
                EditIcon={<MdEdit className="icon" />}
            />
        </AdminStyled>
    );
}

const AdminStyled = styled.div`
    background: red fixed;
    height: 100px;
    position: relative;
`;
