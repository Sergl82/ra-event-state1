/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import './Toolbar.css';
import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function Toolbar({ filters, selected, onSelectFilter }) {
   return (
      <ul className="toolbar">
         {filters.map((filter) => {
            const className =
               filter === selected ? 'toolbar-item selected' : 'toolbar-item';
            return (
               <li
                  key={nanoid()}
                  className={className}
                  onClick={() => onSelectFilter(filter)}
               >
                  {filter}
               </li>
            );
         })}
      </ul>
   );
}

export default Toolbar;

Toolbar.propTypes = {
   selected: PropTypes.string.isRequired,
   filters: PropTypes.arrayOf(PropTypes.string).isRequired,
   onSelectFilter: PropTypes.func.isRequired,
};
