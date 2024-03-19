import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../../../theme";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import ToggleButton from "./ToggleButton";

export default function NavbarRightSideIncomplet() {
    const [activated, setActivated] = useState(true);

    const Notify = (e) => {
        e.preventDefault();
        // setActivated = !activated;

        // toast("Default Notification !");
        if (activated) {
            toast.info("Mode admin activé", {
                // icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log(activated);
            // setActivated = !activated;
            console.log("rentrer dans la function notify activé");
            console.log(activated);
        } else {
            toast.info("Mode admin désactivé", {
                // icon: <FaUserSecret size={30} />,
                theme: "dark",
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log("rentrer dans la function notify désactivé");

            // setActivated = true;
        }
    };
    const Activation = () => {
        console.log("rentrer dans la function ACTIVATION");
        console.log(activated);
        setActivated(!activated);
        console.log(activated);
    };

    return (
        // <div onClick={()=> setActivated(!activated)}>
        // <div onClick={Activation}>
        <div
            onClick={function (e) {
                Notify(e);
                Activation(e);
            }}
        >
            <ToggleButton />
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
