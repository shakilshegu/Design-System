import React from "react"
import TypographyPropsType from "./type"


const Typography = ({ text, tag, className, children, style }: TypographyPropsType) => {
    return (
        React.createElement(tag, {
            className: className,
            style: style
        }, <>
            {text},{children}</>)
    )
}

export default Typography