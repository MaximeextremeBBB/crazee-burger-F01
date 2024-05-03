import { useContext } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import Form from "./Form";
import EditInfoMessage from "./EditInfoMessage";
import { find } from "../../../../../../../utils/array";

export default function EditForm() {
    // state
    const {
        productSelected,
        setProductSelected,
        handleEdit,
        basket,
        handleEditBasketAndMenu,
        titleEditRef,
    } = useContext(OrderContext);

    // comportements (gestionnaires d'événement ou "event handlers")
    const handleChange = (event) => {
        const { name, value } = event.target;

        const productBeingUpdated = {
            ...productSelected,
            [name]: value,
        };
        const isProductAlreadyInBasket =
            find(productBeingUpdated.id, basket) !== undefined;

        setProductSelected(productBeingUpdated); // cette ligne update le formulaire
        handleEdit(productBeingUpdated, event); // cette ligne update le menu

        if (isProductAlreadyInBasket) {
            handleEditBasketAndMenu(productBeingUpdated);
        }
    };

    // affichage
    return (
        <Form
            product={productSelected}
            onChange={handleChange}
            ref={titleEditRef}
        >
            <EditInfoMessage />
        </Form>
    );
}
