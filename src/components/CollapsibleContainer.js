// CollapsibleContainer.js
import React from 'react';

const CollapsibleContainer = ({ children }) => (
  <div className='collapse-container'>
    {children}
  </div>
);

export default CollapsibleContainer;