import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm = ({ refreshProjects }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/projects', { name });
    setName('');
    refreshProjects();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project Name"
        required
      />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;
