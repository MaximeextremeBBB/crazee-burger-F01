import React from "react";

export default function CasinoEffect({ count, className }) {
    return (
        <div>
            <span className={className}>{count}</span>
        </div>
    );
}
