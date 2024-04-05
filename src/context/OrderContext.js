import { createContext } from "react";

export default createContext({
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},

    idOfMenu: () => {},
    menu: [],
    setMenu: () => {},

    handleAdd: () => {},
    handleDelete: () => {},
    resetMenu: () => {},

    newProduct: [],
    setNewProduct: () => {},

    isEdited: true,
    setIsEdited: () => {},
    handleEdit: () => {},

    isCardSelected: true,
    setIsCardSelected: () => {},

    editRef: {},
});
