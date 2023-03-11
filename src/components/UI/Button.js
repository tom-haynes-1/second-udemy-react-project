import React from "react";

import classes from "../UI/Button.module.css";

const Button = (props) => {

    const buttonText = props.children;

return (
    <div>
        <button
            onClick={ props.onClick }
            type={ props.type || 'button' }
            className={ classes.button }
        >
            { buttonText }
        </button>
    </div>
    );
};

export default Button;