import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListsOfTasks from "./components/ListsOfTasks";
import AddATask from "./components/AddATask";

function App() {
  return (
    // <div className="p-3 mt-4 d-md-flex d-sm-flex-none flex-row justify-content-between gap-4 w-100">
    <div className="p-4 mt-4 row g-6">
      <div className="col-md-6 col-sm-12 ">
        <AddATask />
      </div>
      <div className="col-md-6 col-sm-12">
        <ListsOfTasks />
      </div>
    </div>
  );
}

export default App;
