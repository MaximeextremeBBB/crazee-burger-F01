import React, { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths";
import Form from "./Form";
import SubmitButton from "./SubmitButton";

export default function AddForm() {
    // state
    const {
        username,
        handleAdd,
        newProduct,
        setNewProduct,
        changeAvailable,
        changeAds,
        setChangeAvailable,
        setChangeAds,
    } = useContext(OrderContext);
    const { isSubmitted, displaySuccessMessage } = useSuccessMessage();

    // comportements

    const handleChangeSelect = (e) => {
        e.preventDefault();
        const value = e.target.value;
        if (value === "en-stock" || value === "en-rupture") {
            return setChangeAvailable(value);
        }
        return setChangeAds(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID(),
            price: replaceFrenchCommaWithDot(newProduct.price),
            isAds: changeAds === "avec-pub" ? "avec-pub" : "sans-pub",
        };
        handleAdd(newProductToAdd, username);
        setNewProduct(EMPTY_PRODUCT);

        displaySuccessMessage();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    // affichage
    return (
        <Form
            product={newProduct}
            onSubmit={handleSubmit}
            onChange={handleChange}
            changeAvailable={changeAvailable}
            changeAds={changeAds}
            handleChangeSelect={handleChangeSelect}
        >
            <SubmitButton isSubmitted={isSubmitted} />
        </Form>
    );
}
