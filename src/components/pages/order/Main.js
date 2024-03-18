import styled from "styled-components";
import { theme } from "../../../theme";
import Card from "./Card";

export default function Main() {
    return (
        <MainStyled className="main">
            <div className="menu">
                <Card />
            </div>
        </MainStyled>
    );
}

const MainStyled = styled.div`
    background: ${theme.colors.background_white};
    flex: 1; // or you can also use this : height: calc(95vh - 10vh);

    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    .menu {
        margin: 40px;
        align-items: center;
        justify-content: center;
    }
`;
