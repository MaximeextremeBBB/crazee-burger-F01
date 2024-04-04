import styled from "styled-components";
import SubmitMessage from "./SubmitMessage";
import Button from "../../../../../../reusable-ui/Button";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { useContext } from "react";
import { useState } from "react";
import OrderContext from "../../../../../../../context/OrderContext";
import { EMPTY_PRODUCT } from "./AddForm";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig } from "./inputTextConfig";
import { tabsConfig } from "../tabsConfig";

export default function EditForm() {
    // state
    const { newProduct, isEdited, isCardSelected, setIsEdited, setNewProduct } =
        useContext(OrderContext);
    if (isEdited) {
        // alert("vous êtes dans le composant EditForm.js");
    }
    // const tabs = tabsConfig;
    // console.log(tabs[0].index);

    // comportements
    // COMPORTEMENT DU ADD FORM
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const newProductToAdd = {
    //         ...newProduct,
    //         id: crypto.randomUUID(),
    //     };

    //     handleAdd(newProductToAdd);
    //     setNewProduct(EMPTY_PRODUCT);

    //     displaySuccessMessage();
    // };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setNewProduct({ ...newProduct, [name]: value });
    // };

    const inputTexts = getInputTextsConfig(newProduct);

    // affichage
    return isCardSelected ? (
        <EditFormStyled>
            {/* {currentTabSelected == "edit" ? (
                // <ImagePreview
                //     imageSource={newProduct.imageSource}
                //     title={newProduct.title}
                // />
                partie 1
            ) : (
                ""
            )}
            {currentTabSelected == "edit" ? (
                // <div className="input-fields">
                //     {inputTexts.map((input) => (
                //         <TextInput
                //             {...input}
                //             key={input.id}
                //             // onChange={handleChange}
                //             version="minimalist"
                //         />
                //     ))}
                // </div>
            ) : (
                ""
            )}
            {currentTabSelected == "edit" ? (
                <div className="submit">
                    <Button
                        className="submit-button"
                        label={"Ajouter un nouveau produit au menu"}
                        version="success"
                    />
                </div>
            ) : (
                ""
            )} */}
        </EditFormStyled>
    ) : (
        <p>Cliquer sur un produit pour le modifier</p>
    );
}

const EditFormStyled = styled.div`
    /* border: 2px solid black; */
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;
    grid-column-gap: 20px;
    grid-row-gap: 8px;

    .input-fields {
        /* background: blue; */
        grid-area: 1 / 2 / -2 / 3;

        display: grid;
        grid-row-gap: 8px;
    }

    .submit {
        /* background: green; */
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;

        .submit-button {
            /* width: 50%; */
            height: 100%;
        }
    }
`;
