import { findObjectById } from "../../../../../../utils/array";

export const calculateSumToPay = (basket, menu) => {
    return basket.reduce((total, basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu);
        console.log(
            "menuProduct.availabl : ",
            menuProduct.title,
            menuProduct.available
        );
        if (isNaN(menuProduct.price)) return total;
        if (menuProduct.available === "enRupture") {
            // return (total -= menuProduct.price * basketProduct.quantity);
            return total;
        }
        total += menuProduct.price * basketProduct.quantity;
        return total;
    }, 0);
};
