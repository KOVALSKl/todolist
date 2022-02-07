import React, { useEffect, useState } from "react";
import cl from "./App.module.css"
import TaskList from "./components/TaskList";

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
