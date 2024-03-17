import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import { BsPersonCircle } from "react-icons/bs";

export default function OrderPage() {
    // state
    const { username } = useParams();

    // comportements

    //affichage
    return (
        <div>
            <NavBar
                username={username}
                Icon={<BsPersonCircle className="icon" />}
            />
            <MainStyled></MainStyled>
        </div>
    );
}

const MainStyled = styled.div`
    background: #f5f5f7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px 15px 15px;
    height: 100vh;
`;
