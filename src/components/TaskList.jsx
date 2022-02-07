import React, { useEffect, useState } from "react";
import cl from "./styles/TaskList.module.css"
import Task from "./Task";
import CustomButton from "../UI/buttons/CustomButton"

function TaskList(props) {

    const [tasks, setTasks] = useState(props.tasks);

    const addNewTask = (e) => {
        e.preventDefault();
        let date = new Date();
        const newTask = {
            title: '',
            body: '',
            id: Date.now(),
            time: date.toLocaleTimeString(),
            date: date.toLocaleDateString(),
        }
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    const setChanges = (changedTask) => {
        let [task] = tasks.filter(item => item.id === changedTask.id)
        task.title = changedTask.title;
        task.body = changedTask.body;
        setTasks(tasks);
    }

    const saveToLocalStorage = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    useEffect(() => {
        saveToLocalStorage();
    }, [tasks])

    return (
        <div className={cl.tskList}>
            {tasks === null
                ? <div className={cl.emptyMsg}>Нет активных задач</div>
                : tasks.map((task) => {
                    return (
                        <Task
                            title={task.title}
                            body={task.body}
                            date={task.date}
                            time={task.time}
                            id={task.id}
                            key={task.id}
                            setChanges={setChanges}
                            deleteTask={deleteTask}
                        />
                    )
                })}
            <CustomButton
                value="Add"
                img="https://img.icons8.com/external-dreamstale-lineal-dreamstale/100/000000/external-add-ui-dreamstale-lineal-dreamstale.png"
                className={cl.addBtn}
                onClick={addNewTask}
            />
        </div>
    );
}

export default TaskList;
