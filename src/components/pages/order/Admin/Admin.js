import React, { useState } from "react";
import styled from "styled-components/macro";
import { theme } from "../../../../theme";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
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
                ChevronDownIcon={<FiChevronDown className="icon" />}
                ChevronUpIcon={<FiChevronUp className="icon" />}
                PlusIcon={<AiOutlinePlus className="icon" />}
                EditIcon={<MdModeEditOutline className="icon" />}
                handleState={handleState}
                adminState={adminState}
                toggleProduct={toggleProduct}
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
