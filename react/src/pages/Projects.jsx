import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";


export default function Projects() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  useEffect(() => {
    getProjects();
  }, []);

  const onDeleteClick = project => {
    if (!window.confirm("Are you sure you want to delete this project?")) {
      return
    }
    axiosClient.delete(`/projects/${project.id}`)
      .then(() => {
        setNotification('Project was successfully deleted');
        getProjects()
      })
  }

  const getProjects = () => {
    setLoading(true);
    axiosClient.get('/projects')
      .then(({ data }) => {
        setLoading(false);
        setProjects(data.data);
      })
      .catch(() => {
        setLoading(false);
      })
  }

  return (
    <div>
      <div>
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", }}>
          <h1>Projects</h1>
          <Link className="btn-add" to="/projects/new">Add new</Link>
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
                {projects.map(p => (
                  <tr key={p.id}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                    <td>{p.description}</td>
                    <td>{p.created_at}</td>
                    <td>
                      <Link className="btn-edit" to={'/projects/' + p.id}>Edit</Link>
                      &nbsp;
                      <button className="btn-delete" onClick={ev => onDeleteClick(p)}>Delete</button>
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
