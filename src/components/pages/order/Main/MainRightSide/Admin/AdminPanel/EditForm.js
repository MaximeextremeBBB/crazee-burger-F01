import { useContext, useState } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../../../hooks/useSuccessMessage";

export default function EditForm() {
    // state
    const {
        username,
        productSelected,
        setProductSelected,
        handleEdit,
        titleEditRef,
        changeAvailable,
        changeAds,
        setChangeAvailable,
        setChangeAds,
    } = useContext(OrderContext);

    const [valueOnFocus, setvalueOnFocus] = useState();
    const { isSubmitted: isSaved, displaySuccessMessage } = useSuccessMessage();

    // comportements (gestionnaires d'événement ou "event handlers")

    const handleChangeSelect = (e) => {
        e.preventDefault();
        const value = e.target.value;
        if (value === "enStock" || value === "enRupture") {
            return setChangeAvailable(value);
        }
        return setChangeAds(value);
    };

    const handleChange = async (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        await handleChangeSelect(event);

        const productBeingUpdated = {
            ...productSelected,
            [name]: value,
        };

        setProductSelected(productBeingUpdated); // cette ligne update le formulaire
        handleEdit(productBeingUpdated, username); // cette ligne update le menu
    };

    const handleOnFocus = (event) => {
        const valueOnFocus = event.target.value;
        setvalueOnFocus(valueOnFocus);
    };

    const handleOnBlur = (event) => {
        const valueOnBlur = event.target.value;
        if (valueOnFocus !== valueOnBlur) {
            displaySuccessMessage();
        }
    };

    // affichage
    return (
        <Form
            product={productSelected}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            ref={titleEditRef}
            changeAvailable={changeAvailable}
            changeAds={changeAds}
            handleChangeSelect={handleChangeSelect}
        >
            {isSaved ? <SavingMessage /> : <EditInfoMessage />}
        </Form>
    );
}
