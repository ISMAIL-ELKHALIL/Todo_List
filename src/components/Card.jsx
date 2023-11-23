import PropTypes from "prop-types";
const Card = ({ taskObj, index, deleteTask, toggle /* updateListArray */ }) => {
  //const [modal, setModal] = useState(false);

  let colors = {
    primaryColor: "#5D93E1",
    secondaryColor: "#ECF3FC",
  };

  switch (taskObj.priority) {
    case "low":
      colors = { primaryColor: "#59d14a", secondaryColor: "#F2FAF1" };
      break;
    case "medium":
      colors = { primaryColor: "#F9D288", secondaryColor: "#FEFAF1" };
      break;

    case "high":
      colors = { primaryColor: "#f6686b", secondaryColor: "#FDF1F1" };
      break;
  }

  const handleDelete = () => {
    deleteTask(index);
  };

  /*   const updateTask = (index) => {
    taskObj.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(taskObj));
  };
 */
  return (
    <div className="card-wrapper mr-5">
      <div
        className="card-top"
        style={{ "background-color": colors.primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{
            "background-color": colors.secondaryColor,
            "border-radius": "10px",
          }}
        >
          {taskObj.title}
        </span>
        <p className="mt-3">{taskObj.description}</p>
        <div
          className="d-flex gap-3"
          style={{ position: "absolute", right: "20px", bottom: "20px" }}
        >
          <i
            className="far fa-edit mr-3"
            style={{ color: colors.primaryColor, cursor: "pointer" }}
            onClick={toggle}
          ></i>
          <i
            className="fas fa-trash-alt"
            style={{ color: colors.primaryColor, cursor: "pointer" }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      {/*         <EditTask
          modal={modal}
          toggle={toggle}
          updateTask={updateTask}
          taskObj={taskObj}
        /> */}
    </div>
  );
};

Card.propTypes = {
  taskObj: PropTypes.object.isRequired,
  index: PropTypes,
  deleteTask: PropTypes,
  toggle: PropTypes.func.isRequired,
};

export default Card;
