import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";


export default function ProjectForm() {
  const navigate = useNavigate();
  let { id } = useParams();
  const [project, setProject] = useState({
    id: null,
    name: '',
    description: '',
    priority: ''
  });
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const { setNotification } = useStateContext();

  if (id) {
    useEffect(() => {
      setLoading(true);
      axiosClient.get(`/projects/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setProject(data);
        })
        .catch(() => {
          setLoading(false);
        });
    }, []);
  }

  const onSubmit = ev => {
    ev.preventDefault();
    if (project.id) {
      axiosClient.put(`/projects/${project.id}`, project)
        .then(() => {
          setNotification('Project was successfully updated');
          navigate('/projects');
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } else {
      axiosClient.post('/projects', project)
        .then(() => {
          setNotification('Project was successfully created');
          navigate('/projects');
        })
        .catch(err => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  return (
    <>
      {project.id && <h1>Update Project: {project.name}</h1>}
      {!project.id && <h1>New Project</h1>}
      <div className="card animated fadeInDown">
        {loading && (
          <div className="text-center">
            Loading...
          </div>
        )}
        {errors &&
          <div className="alert">
            {Object.keys(errors).map(key => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </div>
        }
        {!loading && (
          <form onSubmit={onSubmit}>
            <input value={project.name} onChange={ev => setProject({ ...project, name: ev.target.value })} placeholder="Name" />
            <input value={project.description} onChange={ev => setProject({ ...project, description: ev.target.value })} placeholder="Description" />
            <input value={project.priority} onChange={ev => setProject({ ...project, priority: ev.target.value })} placeholder="Priority" />
            <button className="btn">Save</button>
          </form>
        )}
      </div>
    </>
  );
}
