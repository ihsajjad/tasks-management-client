import { Button, Form, Modal } from "react-bootstrap";
import useAxios from "../hooks/useAxios";
import useLoadingTasks from "../hooks/useLoadingTasks";
import Swal from "sweetalert2";

const TaskDetailsModal = ({ show, setShow, task }) => {
  const { axiosFetch } = useAxios();
  const { refetch } = useLoadingTasks();

  // Updating task status
  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    const status = e.target.status.value;
    console.log(status);

    // Passing updated data to the server
    const { data } = await axiosFetch.patch(`update-status/${task._id}`, {
      updatedStatus: status,
    });

    if (data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your task has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    }
  };

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Update Task Status</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleUpdateStatus}>
        {/* Displaying task details in the modal body and they are read-only. except Status. */}
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={task.title} autoFocus readOnly />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={task.description}
              rows={3}
              readOnly
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Status</Form.Label>
            <Form.Select name="status" aria-label="Default select example">
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {/* Saving the change and Changing the show value to hide the modal */}
          <Button
            type="submit"
            variant="primary"
            onClick={() => setShow(false)}
          >
            Update Status
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default TaskDetailsModal;
