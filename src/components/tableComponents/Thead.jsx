import React from "react";
export const Thead = ({ cols }) => {
    return (
        <thead>
            <tr>
                {cols.map((col, key) => (
                    <th key={key} scope="col">{col}</th>
                ))}
            </tr>
        </thead>
    )
}