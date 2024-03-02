import React, { useContext } from "react";
import LoginForm from "../login/LoginForm";
import { Link } from "react-router-dom";

export default function OrderPage(props) {
    const onClick = () => {
        alert("Bonjour " + props.data);
        console.log(props.data);
    };

    return (
        <div>
            {/* <LoginForm /> */}
            {/* <h1>Bonjour + {inputValue}</h1> */}
            <h1 onClick={onClick}>Bonjour + {props.data} </h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </div>
    );
}
