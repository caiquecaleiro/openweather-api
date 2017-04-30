import React from 'react';
import PropTypes from 'prop-types';

function PageContainer({ children }) {
  return (
    <div className="page-container fade-in-up">
      <div className="page-content-wrapper">
        {children}
      </div>
    </div>
  );
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageContainer;