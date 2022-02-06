import React from "react";
import cl from "./styles/TaskList.module.css"
import Task from "./Task";

function TaskList({ tasks }) {
    return (
        <div className={cl.tskList}>
            {tasks.length === 0
                ? <div className={cl.emptyMsg}>Нет активных задач</div>
                : tasks.map((task) => {
                    return (
                        <Task
                            title={task.title}
                            body={task.body}
                            date={task.date}
                            key={task.id}
                        />
                    )
                })}
        </div>
    );
}

export default TaskList;
