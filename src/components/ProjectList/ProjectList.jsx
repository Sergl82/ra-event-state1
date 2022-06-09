import './ProjectList.css';
import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ProjectList({ selected, projects }) {
   let filtredProjects = [];

   if (selected !== 'All') {
      filtredProjects = projects.filter((item) => item.category === selected);
   } else {
      filtredProjects = [...projects];
   }

   return (
      <div className="projectlist">
         {filtredProjects.map((item) => (
            <img
               className="projectlist-item"
               src={item.img}
               alt={item.category}
               key={nanoid()}
            />
         ))}
      </div>
   );
}

export default ProjectList;

ProjectList.propTypes = {
   selected: PropTypes.string.isRequired,
   projects: PropTypes.arrayOf(PropTypes.string).isRequired,
};
