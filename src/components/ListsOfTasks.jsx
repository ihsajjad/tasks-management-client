const ListsOfTasks = () => {
  const tasks = [
    {
      title: "Complete Project Proposal",
      description:
        "Write a detailed project proposal for the new product launch.",
      status: "active",
    },
    {
      title: "Review Marketing Campaign",
      description:
        "Analyze the effectiveness of the recent marketing campaign and suggest improvements.",
      status: "active",
    },
    {
      title: "Prepare Monthly Report",
      description:
        "Gather sales and financial data to create the monthly report for the management team.",
      status: "completed",
    },
    {
      title: "Conduct User Interviews",
      description:
        "Interview a sample of users to gather feedback on the latest app update.",
      status: "completed",
    },
    {
      title: "Bug Fixing",
      description:
        "Investigate and fix reported bugs in the software application.",
      status: "active",
    },
  ];

  return (
    <div className="w-50 p4">
      <h3 className="fs-3 text-center">List of Tasks</h3>
      <div>
        {tasks.map((task, i) => (
          <div key={i} className="border border-success p-2 mb-2 rounded">
            <div>
              <h3 className="fs-5">{task.title}</h3>
              <p className="">{task.description}</p>
              <p>{task.status}</p>
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
