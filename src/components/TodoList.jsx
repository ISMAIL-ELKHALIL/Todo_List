import Card from "./Card";
import NewTask from "./modals/NewTask";
import { useEffect, useState } from "react";

const TodoList = () => {
  const [taskList, setTaskList] = useState([]);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const handleSavedTask = (newTask) => {
    const tempTaskList = [...taskList, newTask];
    setTaskList(tempTaskList);
    localStorage.setItem("taskList", JSON.stringify(tempTaskList));
    console.log("Task list", tempTaskList);
  };

  useEffect(() => {
    let storedTaskList = JSON.parse(localStorage.getItem("taskList"));
    if (storedTaskList) {
      setTaskList(storedTaskList);
    }
  }, []);
  return (
    <>
      <div className="header text-center ">
        <div className="pt-2">
          <h1 className="">Todo List</h1>
          <button className="btn btn-primary border-none mt-4" onClick={toggle}>
            Create Task
          </button>
          <NewTask modal={modal} toggle={toggle} onSaveTask={handleSavedTask} />
        </div>
      </div>
      <div className="task-container">
        {taskList?.map((task, index) => {
          return (
            <Card taskObj={task} key={task.id} toggle={toggle} index={index} />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
