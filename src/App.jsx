import './App.css';
import React, { useState } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import ProjectList from './components/ProjectList/ProjectList';
import getData from './getData';

function App() {
  const filtres = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const [selected, setSelected] = useState('All');

  const onSelectFilter = (filter) => {
    setSelected(() => filter);
  }

  return (
    <div className="App">
      <Toolbar
        filters={filtres}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList
        selected={selected}
        projects={getData()}
      />
    </div>
  );
}

export default App;
