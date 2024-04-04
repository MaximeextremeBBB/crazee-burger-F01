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
    const {
        newProduct,
        isEdited,
        isCardSelected,
        setIsEdited,
        setNewProduct,
        editRef,
    } = useContext(OrderContext);

    console.log(editRef);
    // const tabs = tabsConfig;
    // console.log(tabs[0].index);

    // comportements

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const test2 = () => {
        console.log(editRef.current);
        editRef.current.focus();
    };

    const inputTexts = getInputTextsConfig(newProduct);

    // affichage
    return isCardSelected ? (
        <EditFormStyled>
            <ImagePreview
                imageSource={newProduct.imageSource}
                title={newProduct.title}
            />
            <div className="input-fields">
                {inputTexts.map((input) => (
                    // <TextInput
                    //     // {...input}
                    //     // ref={editRef}
                    //     name={input.name}
                    //     value={input.value}
                    //     placeholder={input.placeholder}
                    //     key={input.id}
                    //     Icon={input.Icon}
                    //     version="minimalist"
                    //     version="minimalist"
                    //     onChange={handleChange}

                    // />
                    <TextInput
                        {...input}
                        ref={editRef}
                        key={input.id}
                        onChange={handleChange}
                        version="minimalist"
                    />
                ))}
                {/* <input type="text" ref={editRef} /> */}
            </div>
            <div className="submit">
                <p>
                    Cliquer sur un produit du menu pour le modifier en tmps réél{" "}
                    <button onClick={test2}>TEEEEEEEEEEEEEEEST</button>
                </p>
            </div>
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
