import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../Redux-toolkit/features/taskSlice";
import { v4 } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
export default function TaskForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const task = useSelector((state) => state.task);

  const [taskCreator, setTaskCreator] = useState({
    title: "",
    description: "",
  });
  console.log(taskCreator);
  const handleChange = (e) => {
    setTaskCreator({
      ...taskCreator,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(taskCreator));
    } else {
      dispatch(addTask({ ...taskCreator, id: v4() }));
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTaskCreator(task.find((task) => task.id === params.id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-[#8A2BE2] max-w-sm p-4">
        <label for="title" className="block text-sm font-bold mb-1">
          Task:
        </label>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => handleChange(e)}
          value={taskCreator.title}
          name="title"
          className="w-full p-2 rounded-md bg-[#4B0082] mb-2"
        />
        <label for="description" className="block text-sm font-bold mb-1">
          Description:
        </label>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => handleChange(e)}
          value={taskCreator.description}
          name="description"
          className="w-full p-2 rounded-md bg-[#4B0082] mb-2"
        />
        <button type="submit" className="bg-indigo-600 px-2 py-1">
          Save
        </button>
      </form>
    </div>
  );
}
