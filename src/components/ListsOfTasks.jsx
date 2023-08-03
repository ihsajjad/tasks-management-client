import useLoadingTasks from "../hooks/useLoadingTasks";

const ListsOfTasks = () => {
  const { refetch, tasks } = useLoadingTasks();

  console.log(tasks);

  return (
    <div className="w-50 p4">
      <h3 className="fs-3 text-center">List of Tasks</h3>
      <div>
        {tasks?.map((task, i) => (
          <div key={i} className="border border-success p-2 mb-2 rounded">
            <div>
              <h3 className="fs-5">{task?.title}</h3>
              <p className="">{task?.description}</p>
              <p>{task?.status}</p>
            </div>
            <div>
              <span>Actions: </span>
              <button className="me-2">U</button>
              <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListsOfTasks;
