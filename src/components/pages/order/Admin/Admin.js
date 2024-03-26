import React, { useContext, useState } from "react";
import styled from "styled-components/macro";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import IconsPosition from "./IconsPosition";
import AdminContent from "./AdminContent";
import AddEditContext from "../../../../context/AddEditContext";
import AdminStateContext from "../../../../context/AdminStateContext";
import IsModeAdminContext from "../../../../context/IsModeAdminContext";

export default function Admin() {
    const [adminState, setAdminState] = useState(true);
    const [toggleProduct, setToggleProduct] = useState(true);
    const { isModeAdmin, setIsModeAdmin } = useContext(IsModeAdminContext);
    console.log(isModeAdmin);
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
            <AddEditContext.Provider
                value={isModeAdmin ? toggleProductValue : ""}
            >
                <AdminStateContext.Provider value={adminStateValue}>
                    {/* <PlusIconcontext.Provider value={plusIconValue}> */}
                    {isModeAdmin ? (
                        <IconsPosition
                            ChevronDownIcon={<FiChevronDown className="icon" />}
                            ChevronUpIcon={<FiChevronUp className="icon" />}
                            handleState={handleState}
                            adminState={adminState}
                            // toggleProduct={toggleProduct}
                            // setToggleProduct={setToggleProduct}
                            setAdminState={setAdminState}
                        />
                    ) : (
                        ""
                    )}
                    {/* </PlusIconcontext.Provider> */}
                </AdminStateContext.Provider>
            </AddEditContext.Provider>
            {/* isModeAdmin */}
            {adminState && isModeAdmin ? (
                <AdminContent toggleProduct={toggleProduct} />
            ) : (
                ""
            )}
        </AdminStyled>
    );
}

const AdminStyled = styled.div`
    position: relative;
`;
