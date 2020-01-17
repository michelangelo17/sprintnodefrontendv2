import React, { useEffect } from "react";
import { getProjects } from "./redux/thunks";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector(state => state);
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  return (
    <>
      <h1>Server App</h1>
      {projects.map(project => (
        <div key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          {project.completed ? <p>DONE</p> : <p>Still Working On it!</p>}
        </div>
      ))}
    </>
  );
};

export default App;
