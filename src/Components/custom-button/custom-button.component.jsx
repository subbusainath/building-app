import React from 'react';
import './custom-button.css';
 
const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success--solid",
    "btn--dark--solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success--outline",
    "btn--dark--outline"

]

const SIZE = [
    "btn--medium",
    "btn--larger"
]


export default function CustomButton ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) {

const checkButtonStyle = STYLES.includes(buttonStyle) ?
buttonStyle: STYLES[0];

const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize
: SIZE[0];


    return(
        <button className = {`btn ${checkButtonStyle} ${checkButtonSize}`} 
        onClick={onClick} 
        type={type}
        >
            {children}
        </button>
    );
};