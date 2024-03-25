import React, { useState } from "react";
import styled from "styled-components/macro";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import IconsPosition from "./IconsPosition";
import AdminContent from "./AdminContent";
import AddEditContext from "../../../../context/AddEditContext";
import AdminStateContext from "../../../../context/AdminStateContext";
import PlusIconcontext from "../../../../context/PlusIconcontext";

export default function Admin() {
    const [adminState, setAdminState] = useState(true);
    const [toggleProduct, setToggleProduct] = useState(true);

    //function
    const handleState = () => {
        setAdminState(!adminState);
    };

    const editerProduitFunction = () => {
        setToggleProduct(false);
    };

    const ajouterProduitFunction = () => {
        setToggleProduct(true);
    };

    // Using Context
    const toggleProductValue = {
        toggleProduct,
        ajouterProduitFunction,
        editerProduitFunction,
    };

    const adminStateValue = {
        setAdminState,
    };

    return (
        <AdminStyled>
            <AddEditContext.Provider value={toggleProductValue}>
                <AdminStateContext.Provider value={adminStateValue}>
                    {/* <PlusIconcontext.Provider value={plusIconValue}> */}
                    <IconsPosition
                        ChevronDownIcon={<FiChevronDown className="icon" />}
                        ChevronUpIcon={<FiChevronUp className="icon" />}
                        PlusIcon={<AiOutlinePlus className="icon" />}
                        EditIcon={<MdModeEditOutline className="icon" />}
                        handleState={handleState}
                        adminState={adminState}
                        // toggleProduct={toggleProduct}
                        // setToggleProduct={setToggleProduct}
                        setAdminState={setAdminState}
                        ajouterProduitFunction={ajouterProduitFunction}
                        editerProduitFunction={editerProduitFunction}
                    />
                    {/* </PlusIconcontext.Provider> */}
                </AdminStateContext.Provider>
            </AddEditContext.Provider>
            {adminState ? <AdminContent toggleProduct={toggleProduct} /> : ""}
        </AdminStyled>
    );
}

const AdminStyled = styled.div`
    position: relative;
`;
