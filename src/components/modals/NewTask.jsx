import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";
import { useState } from "react";

const NewTask = ({ modal, toggle, onSaveTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskPriority, setTaskPriority] = useState("low");
  const [taskDescription, setTaskDescription] = useState("");

  const handelChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "title":
        setTaskTitle(value);
        break;
      case "description":
        setTaskDescription(value);
        break;
      case "priority":
        setTaskPriority(value);
    }
  };

  return (
    <div>
      <Modal isOpen={modal} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form action="">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id=""
                className=" form-control"
                placeholder="Task Title"
                value={taskTitle}
                onChange={handelChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Priority</label>
              <select
                name="priority"
                id=""
                onChange={handelChange}
                className="form-control"
              >
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </div>

            <div className="form-group mt-2">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id=""
                cols="30"
                rows="5"
                value={taskDescription}
                className=" form-control"
                placeholder="Task description"
                onChange={handelChange}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              onSaveTask({
                id: crypto.randomUUID().toString(),
                title: taskTitle,
                priority: taskPriority,
                description: taskDescription,
              });
              console.log("Inside Button", {
                id: crypto.randomUUID().toString(),
                title: taskTitle,
                priority: taskPriority,
                description: taskDescription,
              });
              toggle();
            }}
          >
            Create
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

NewTask.propTypes = {
  modal: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onSaveTask: PropTypes.func.isRequired,
};
export default NewTask;
