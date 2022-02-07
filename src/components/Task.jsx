import React, { useEffect, useMemo, useState } from "react";
import CustomButton from "../UI/buttons/CustomButton";
import cl from "./styles/Task.module.css"

function Task(props) {

    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);

    useEffect(() => {
        props.setChanges({
            title: title,
            body: body,
            id: props.id,
        });
    }, [title, body]);

    return (
        <div className={cl.tsk}>
            <div className={cl.tskHeader}>
                <div className={cl.tskTitle}>
                    <input
                        value={title}
                        placeholder="Название задачи..."
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                    <span>{props.time}</span><br />
                    <span>{props.date}</span>
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
                <textarea
                    value={body}
                    placeholder="Условие задачи..."
                    onChange={(e) => {
                        setBody(e.target.value);
                    }}
                />
            </div>
        </div>
    )
}

export default Task;