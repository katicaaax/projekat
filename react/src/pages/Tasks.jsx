import React, { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";

export default function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  useEffect(() => {
    getTasks();
  }, []);

  const onDeleteClick = task => {
    if (!window.confirm("Are you sure you want to delete this task?")) {
      return
    }
    axiosClient.delete(`/tasks/${task.id}`)
      .then(() => {
        setNotification('Task was successfully deleted');
        getTasks();
      })
  }

  const getTasks = () => {
    setLoading(true);
    axiosClient.get('/tasks')
      .then(({ data }) => {
        setLoading(false);
        setTasks(data.data);
      })
      .catch(() => {
        setLoading(false);
      })
  }

  return (
    <div>
      <div>
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", }}>
          <h1>Tasks</h1>
          <Link className="btn-add" to="/tasks/new">Add new</Link>
        </div>
        <div className="card animated fadeInDown">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Priority</th>
              </tr>
            </thead>
            {loading &&
              <tbody>
                <tr>
                  <td colSpan="5" className="text-center">
                    Loading...
                  </td>
                </tr>
              </tbody>
            }
            {!loading &&
              <tbody>
                {tasks.map(t => (
                  <tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.name}</td>
                    <td>{t.description}</td>
                    <td>{t.priority}</td>
                    <td>
                      <Link className="btn-edit" to={'/tasks/' + t.id}>Edit</Link>
                      &nbsp;
                      <button className="btn-delete" onClick={ev => onDeleteClick(t)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            }
          </table>
        </div>
      </div>
    </div>
  )
}
