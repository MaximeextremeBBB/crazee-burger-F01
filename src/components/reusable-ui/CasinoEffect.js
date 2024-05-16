import React from "react";

export default function CasinoEffect({ count, className }) {
    return (
        <TransitionGroup component={CasinoEffectStyled}>
            <CSSTransition
                classNames={"count-animated"}
                timeout={5000}
                key={count}
            >
                <span className={className}>{count}</span>
            </CSSTransition>
        </TransitionGroup>
    );
}

const CasinoEffectStyled = styled.div`
    border: 1px solid red;
    count-animated {
    }
    count-animated-enter-active {
    }
    count-animated-enter-done {
    }
    count-animated-exit-active {
    }
    count-animated-exit-done {
    }
`;
