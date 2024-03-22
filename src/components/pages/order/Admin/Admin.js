import React, { useState } from "react";
import styled from "styled-components/macro";
import { theme } from "../../../../theme";
import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import IconsPosition from "./IconsPosition";
import AdminContent from "./AdminContent";

export default function Admin() {
    const [adminState, setAdminState] = useState(true);
    const [toggleProduct, setToggleProduct] = useState(true);

    const handleState = () => {
        setAdminState(!adminState);
    };

    const ajouterProduitFunction = () => {
        setToggleProduct(true);
    };

    const editerProduitFunction = () => {
        setToggleProduct(false);
    };

    return (
        <AdminStyled>
            <IconsPosition
                ChevronDownIcon={<IoChevronDown className="icon" />}
                ChevronUpIcon={<IoChevronUp className="icon" />}
                PlusIcon={<AiOutlinePlus className="icon" />}
                EditIcon={<MdEdit className="icon" />}
                handleState={handleState}
                adminState={adminState}
                // setToggleProduct={setToggleProduct}
                setAdminState={setAdminState}
                ajouterProduitFunction={ajouterProduitFunction}
                editerProduitFunction={editerProduitFunction}
            />

            {adminState ? <AdminContent toggleProduct={toggleProduct} /> : ""}
        </AdminStyled>
    );
}

const AdminStyled = styled.div`
    position: relative;
`;
