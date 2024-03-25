import React, { useState } from "react";
import styled from "styled-components/macro";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import IconsPosition from "./IconsPosition";
import AdminContent from "./AdminContent";
import AddEditContext from "../../../../context/AddEditContext";
import AdminStateContext from "../../../../context/AdminStateContext";

export default function Admin() {
    const [adminState, setAdminState] = useState(true);
    const [toggleProduct, setToggleProduct] = useState(true);

    //function
    const handleState = () => {
        setAdminState(!adminState);
    };

    // Using Context
    const toggleProductValue = {
        toggleProduct,
        setToggleProduct,
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
                        handleState={handleState}
                        adminState={adminState}
                        // toggleProduct={toggleProduct}
                        // setToggleProduct={setToggleProduct}
                        setAdminState={setAdminState}
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
