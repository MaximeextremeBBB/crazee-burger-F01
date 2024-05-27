import React, { useState } from "react";
import styled from "styled-components/macro";
import TextInput from "../../../../../../reusable-ui/TextInput";
import ImagePreview from "./ImagePreview";
import { getInputTextsConfig, getPrice } from "./inputTextConfig";
import { GoMegaphone } from "react-icons/go";
import { FiPackage } from "react-icons/fi";
import { theme } from "../../../../../../../theme";
import { convertStringToBoolean } from "../../../../../../../assets/string";

const Form = React.forwardRef(
    (
        {
            product,
            onSubmit,
            onChange,
            onFocus,
            onBlur,
            changeAvailable,
            changeAds,
            handleChangeSelect,
            children,
        },
        ref
    ) => {
        // state (vide)

        // comportements (vide)

        const inputTexts = getInputTextsConfig(product);
        const priceValue = getPrice(product);

        // affichage
        return (
            <FormStyled onSubmit={onSubmit}>
                <ImagePreview
                    imageSource={product.imageSource}
                    title={product.title}
                />
                <div className="input-fields">
                    {inputTexts.map((input) => (
                        <TextInput
                            {...input}
                            key={input.id}
                            onChange={onChange}
                            version="minimalist"
                            onFocus={onFocus}
                            onBlur={onBlur}
                            ref={ref && input.name === "title" ? ref : null}
                        />
                    ))}
                    <PriceStyled>
                        <div>
                            <TextInput
                                {...inputTexts}
                                name="price"
                                placeholder="Prix"
                                value={product.price ? product.price : ""}
                                onChange={onChange}
                                Icon={priceValue[0].Icon}
                                version="minimalist"
                                onFocus={onFocus}
                                onBlur={onBlur}
                                ref={
                                    ref && inputTexts.name === "title"
                                        ? ref
                                        : null
                                }
                            />
                        </div>
                        <SelectStyled>
                            <IconStyled>
                                <FiPackage />
                            </IconStyled>
                            <div>
                                <select
                                    name="available"
                                    id="available"
                                    onChange={function (event) {
                                        onChange(event);
                                        handleChangeSelect(event);
                                    }}
                                    value={changeAvailable}
                                >
                                    <option value="enStock">En stock</option>
                                    <option value="enRupture">
                                        En rupture
                                    </option>
                                </select>
                            </div>
                        </SelectStyled>
                        <SelectStyled>
                            <IconStyled>
                                <GoMegaphone />
                            </IconStyled>
                            <div>
                                <select
                                    name="ads"
                                    id="ads"
                                    onChange={function (event) {
                                        onChange(event);
                                        handleChangeSelect(event);
                                    }}
                                    value={changeAds}
                                >
                                    <option value="avec-pub">Avec pub</option>
                                    <option value="sans-pub">Sans pub</option>
                                </select>
                            </div>
                        </SelectStyled>
                    </PriceStyled>
                </div>

                <div className="form-footer">{children}</div>
            </FormStyled>
        );
    }
);

export default Form;

const FormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: repeat(4, 1fr);
    height: 100%;
    width: 70%;
    grid-column-gap: 20px;
    grid-row-gap: 8px;

    .input-fields {
        grid-area: 1 / 2 / -2 / 3;

        display: grid;
        grid-row-gap: 8px;
    }

    .form-footer {
        grid-area: 4 / -2 / -1 / -1;
        display: flex;
        align-items: center;
        position: relative;
        top: 3px;
    }
`;

const PriceStyled = styled.div`
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    align-items: center;
`;

const SelectStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${theme.colors.background_white};
    margin-left: 10px;
    select {
        border: none;
        font-size: ${theme.fonts.size.SM};
        background-color: ${theme.colors.background_white};

        &::placeholder {
            color: ${theme.colors.greyMedium};
        }
    }
`;

const IconStyled = styled.div`
    display: flex;
    padding: 10px;
`;
