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
    position: relative;
    overflow-y: hidden;

    span {
        display: inline-block;
    }
    .count-animated-enter {
        transform: translateY(100%);
    }
    .count-animated-enter-active {
        transform: translateY(0%);
        transition: 300ms;
    }
    .count-animated-enter-done {
    }
    .count-animated-exit-active {
        transform: translateY(0%);
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .count-animated-exit-done {
        transform: translateY(-100%);
        transition: 300ms;
    }
`;
