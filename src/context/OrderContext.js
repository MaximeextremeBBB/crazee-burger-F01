import { createContext } from "react";

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},

    menu: [],
    handleAdd: () => {},
    handleDelete: () => {},
    resetMenu: () => {},

    newProduct: [],
    setNewProduct: () => {},

    isEdited: true,
    setIsEdited: () => {},
    handleEdit: () => {},
});
