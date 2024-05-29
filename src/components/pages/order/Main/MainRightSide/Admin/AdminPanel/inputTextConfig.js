import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextsConfig = (newProduct) => [
    {
        id: "0",
        name: "title",
        value: newProduct.title,
        type: "text",
        placeholder: "Nom du produit (ex: Super Burger)",
        Icon: <FaHamburger />,
        version: "minimalist",
        className: "title",
    },
    {
        id: "1",
        name: "imageSource",
        value: newProduct.imageSource,
        type: "text",
        placeholder:
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
        Icon: <BsFillCameraFill />,
        version: "minimalist",
    },
    // {
    //     id: "2",
    //     name: "price",
    //     value: newProduct.price ? newProduct.price : "",
    //     type: "text",
    //     placeholder: "Prix",
    //     Icon: <MdOutlineEuro />,
    //     version: "minimalist",
    // },
    // {
    //     id: "3",
    //     name: "available",
    //     value: newProduct.title,
    //     type: "text",
    //     placeholder: "En Vente",
    //     Icon: <MdOutlineEuro />,
    //     version: "minimalist",
    // },
];

export const getPrice = (newProduct) => [
    {
        id: "2",
        name: "price",
        value: newProduct.price ? newProduct.price : "",
        type: "text",
        placeholder: "Prix",
        Icon: <MdOutlineEuro />,
        version: "minimalist",
    },
];
