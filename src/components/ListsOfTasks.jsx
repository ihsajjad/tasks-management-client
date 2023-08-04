import { Button } from "react-bootstrap";
import useAxios from "../hooks/useAxios";
import useLoadingTasks from "../hooks/useLoadingTasks";
import { useState } from "react";
import TaskDetailsModal from "./TaskDetailsModal";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ListsOfTasks = () => {
  const { refetch, tasks } = useLoadingTasks();
  const { axiosFetch } = useAxios();
  const [show, setShow] = useState(false);
  const [task, setTask] = useState({});

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosFetch.delete(`delete/${id}`);
        if (data.deletedCount > 0) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          refetch();
        }
      }
    });
  };

  return (
    <div className="">
      <h3 className="fs-3 text-center mb-3">List of Tasks</h3>
      <h3 className="fs-5 text-center mb-3">Total tasks: {tasks.length}</h3>
      <div>
        {tasks?.map((task, i) => (
          <div key={i} className="border border-success p-2 mb-2 rounded">
            <div>
              <h3 className="fs-5">{task?.title}</h3>
              <p className="">{task?.description}</p>
              <button
                className={`border-0 text-white rounded fs-5 py-1 px-2 mb-2 ${
                  task?.status === "active" ? "bg-info" : "bg-success"
                }`}
              >
                {task?.status}
              </button>
            </div>
            <div className="d-flex">
              <Button
                className="rounded-circle d-flex justify-cotent-center align-items-center fs-5 p-2 bg-warning border-0 text-white me-2"
                onClick={() => {
                  setShow(true), setTask(task);
                }}
              >
                <FaEdit></FaEdit>
              </Button>

              <button
                onClick={() => handleDelete(task._id)}
                className="rounded-circle d-flex justify-cotent-center align-items-center fs-5 p-2 bg-danger border-0 text-white"
              >
                <FaTrashAlt></FaTrashAlt>
              </button>
            </div>
          </div>
        ))}
      </div>
      {
        <TaskDetailsModal
          show={show}
          setShow={setShow}
          task={task}
        ></TaskDetailsModal>
      }
    </div>
  );
};

export default ListsOfTasks;
