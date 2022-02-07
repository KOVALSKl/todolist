import React, { useEffect, useMemo, useState } from "react";
import cl from "./App.module.css"
import TaskList from "./components/TaskList";
import CustomButton from "./UI/buttons/CustomButton"

function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks"))??[]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })

  return (
    <div className={cl.App}>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
