import React from "react";
import classNames from "classnames";

type ButtonProps = {
    text?: string
    outline?: boolean
    children: React.ReactNode
    className?: string
}

const Button = ({ text, outline, children, className }: ButtonProps) => {
    return (
        <button onClick={() => { }}
            className={classNames('button', className, {
                'button--outline': outline
            })}
        >{children}</button>
    )
}

export default Button