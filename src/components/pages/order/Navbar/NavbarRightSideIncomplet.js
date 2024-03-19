import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../../../theme";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";

export default function NavbarRightSideIncomplet() {
    const Notify = () => {
        toast("Default Notification !");
        console.log("rentrer dans la function notify");
    };
    return (
        <div>
            <div onClick={Notify}>
                {/* Notify */}
                <ToggleButton />
            </div>
            <ToastContainer className="toaster" bodyClassName="body-toast" />
        </div>
    );
}

const NavbarRightSideIncompletStyled = styled.div`
    .toaster {
        max-width: 300px;
    }

    .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
        background: ${theme.colors.background_dark};
    }

    .body-toast {
        .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
            margin-right: 20px;
            margin-left: 5px;
        }
        div {
            line-height: 1.3em;
        }
    }
`;
