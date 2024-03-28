import { useContext } from "react";
import styled from "styled-components/macro";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { tabsConfig, getTabSelected } from "./tabsConfig";
import TextInput from "../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";

export default function AdminPanel() {
    const { currentTabSelected } = useContext(OrderContext);

    const tabs = tabsConfig;
    const tabSelected = getTabSelected(tabs, currentTabSelected);

    const handleChange = (event) => {
        event.preventDefault();
    };

    return (
        <AdminPanelStyled>
            {/* {tabSelected.label} */}
            {tabSelected.label == "Ajouter un produit" && (
                <div className="content">
                    <div className="picture">Imaaaaaaaaaaaage</div>
                    <div className="form">
                        <form action="">
                            <TextInput
                                className="text-input"
                                Icon={<FaHamburger className="icon" />}
                                placeholder={
                                    "Nom du produit (ex: Super Burger)"
                                }
                            ></TextInput>
                            <TextInput
                                className="text-input"
                                Icon={<BsFillCameraFill className="icon" />}
                                placeholder={
                                    "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
                                }
                            ></TextInput>
                            <TextInput
                                className="text-input"
                                Icon={<MdOutlineEuro className="icon" />}
                                placeholder={"Prix"}
                            ></TextInput>
                            <div
                                onClick={(e) => {
                                    e.preventDefault();
                                }}
                            >
                                <PrimaryButton
                                    label={"Ajouter un nouveau produit au menu"}
                                ></PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AdminPanelStyled>
    );
}

const AdminPanelStyled = styled.div`
    height: 251px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    background: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};

    .content {
        display: grid;
        grid-template-columns: 20% 80%;
        grid-template-rows: 4;
        height: 251px;

        .form form {
            display: grid;
            width: 40%;
            grid-template-rows: 50px 50px 50px 50px;

            top: 0;
            height: 250px;

            .text-input {
                margin: 0px;
            }
            .icon {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: ${theme.fonts.size.SM};
                margin-left: 10px;
            }
        }
    }
`;
