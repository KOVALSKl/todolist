import React from 'react';
import cl from "./CustomButton.module.css"

function TaskButton({ value, img, onClick, ...props}) {
    return (
        <button
            onClick={onClick}
            className={[cl.btn, props.className].join(' ')}
            >
            <img src={img} alt={value} />
        </button>
    )
}

export default TaskButton;