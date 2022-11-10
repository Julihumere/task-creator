import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../Redux-toolkit/features/taskSlice";
import { Link } from "react-router-dom";
export default function TaskList() {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.task);

  const handleDelete = (e) => {
    dispatch(deleteTask(e.target.value));
  };
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Tasks: {taskList.length}</h1>
        <Link to="/form" className="bg-sky-500/75 px-2 py-1 rounded-sm text-sm">
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-5">
        {taskList &&
          taskList.map((e) => (
            <div key={e.id} className="bg-[#8A2BE2] p-4 rounded-md shadow-2xl">
              <header className="flex justify-between">
                <h2>{e.title}</h2>
                <div className="flex gap-x-2">
                  <Link
                    to={`/edit/${e.id}`}
                    className="bg-indigo-800  px-2 py-1 text-xs rounded-md self-center"
                  >
                    Edit
                  </Link>
                  <button
                    value={e.id}
                    onClick={handleDelete}
                    className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                  >
                    Delete
                  </button>
                </div>
              </header>
              <h3>{e.description}</h3>
            </div>
          ))}
      </div>
    </div>
  );
}
