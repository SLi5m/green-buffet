import { type } from "@testing-library/user-event/dist/type";
import { React } from "react";
import { Children } from "react/cjs/react.production.min";
import "./button.css"

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES[0]

    return (
        <button className={'btn ${checkButtonStyle} ${checkButtonSize}'} onClick={onClick} type={type}>
            {children}
        </button>
    )
}
    