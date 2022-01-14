import React from "react";

import { bgcolor } from "@mui/system";

export const ProgressBar = (props) => {
    const { completed } = props;

    const setColor = (completed) => {
        let bgcolor = ''
        if (completed < 33) {
            bgcolor = '#bb1c2a'
        } else if (completed > 33 && completed < 66) {
            bgcolor = '#fab666'
        } else if (completed > 66) {
            bgcolor = '#2faf49'
        }
        return bgcolor
    }
    const containerStyles = {
        height: 20,
        width: '50%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 10
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: `${setColor(completed)}`,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    );
};
