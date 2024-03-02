import React, { useContext } from "react";
import LoginForm from "../login/LoginForm";
import { Link, useParams } from "react-router-dom";

export default function OrderPage(props) {
    // const username = useParams(); // F02: #14 6:40s ici username sera un objet car c'est la fonction useParam qui fait que ce sera un objet
    const { username } = useParams();
    console.log("username: ", username);

    const onClick = () => {
        alert("Bonjour " + props.data);
        console.log(props.data);
    };

    return (
        <div>
            <h1 onClick={onClick}>Bonjour + {username} </h1>
            <Link to="/">
                <button>Déconnexion</button>
            </Link>
        </div>
    );
}
