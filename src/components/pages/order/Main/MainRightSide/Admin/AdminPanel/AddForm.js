import React, { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";
import { replaceFrenchCommaWithDot } from "../../../../../../../utils/maths";
import Form from "./Form";
import SubmitButton from "./SubmitButton";
import { useHandleChangeSelect } from "../../../../../../../hooks/useHandleChangeSelect";

export default function AddForm() {
    // state
    const {
        username,
        handleAdd,
        newProduct,
        setNewProduct,
        changeAvailable,
        changeAds,
        setChangeAds,
        setChangeAvailable,
    } = useContext(OrderContext);
    const { isSubmitted, displaySuccessMessage } = useSuccessMessage();
    // const { handleChangeSelect } = useHandleChangeSelect();

    // comportements
    const handleChangeSelect = (event) => {
        const valueSelect = event.target.value;
        if (valueSelect === "enStock" || valueSelect === "enRupture") {
            setChangeAvailable(valueSelect);
        }
        if (valueSelect === "avec-pub" || valueSelect === "sans-pub") {
            setChangeAds(valueSelect);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // handleChangeSelect(event);
        const newProductToAdd = {
            ...newProduct,
            id: crypto.randomUUID(),
            price: replaceFrenchCommaWithDot(newProduct.price),
            ads: changeAds === "avec-pub" ? "avec-pub" : "sans-pub",
            available: changeAvailable === "enStock" ? "enStock" : "enRupture",
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
