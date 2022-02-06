import React, { useState } from "react";
import cl from "./App.module.css"
import TaskList from "./components/TaskList";
import CustomButton from "./UI/buttons/CustomButton"

function App() {

  let date = new Date();

  const [tasks, setTasks] = useState([]);

  const addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      title: "",
      body: "",
      id: Date.now(),
      date: date,
    }
    setTasks([...tasks, newTask]);
  }

  return (
    <div className={cl.App}>
      <TaskList tasks={tasks} />
      <CustomButton
        value="Add"
        img="https://img.icons8.com/external-dreamstale-lineal-dreamstale/100/000000/external-add-ui-dreamstale-lineal-dreamstale.png"
        className={cl.addBtn}
        onClick={addNewTask}
      />
    </div>
  );
}

export default App;
