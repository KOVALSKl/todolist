import React from "react";
import CustomButton from "../UI/buttons/CustomButton";
import cl from "./styles/Task.module.css"

function Task({ title, body, date }) {
    return (
        <div className={cl.tsk}>
            <div className={cl.tskHeader}>
                <div className={cl.tskTitle}>
                    <input value={title} />
                    <span>{date.toLocaleTimeString()}</span><br/>
                    <span>{date.toLocaleDateString()}</span>
                </div>
                <div className={cl.tskButtons}>
                    <CustomButton
                        value="Edit"
                        img="https://img.icons8.com/pastel-glyph/64/000000/edit--v1.png"
                    />
                    <CustomButton
                        value="Delete"
                        img="https://img.icons8.com/small/128/000000/filled-trash.png"
                    />
                </div>
            </div>
            <div className={cl.tskBody}>
                <textarea value={body} onInput={(e) => {
                    console.log(e.target);
                }}/>
            </div>
        </div>
    )
}

export default Task;