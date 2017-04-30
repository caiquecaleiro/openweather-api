import React from 'react';
import PropTypes from 'prop-types';

function Portlet(props) {
  return (
    <div className="portlet light">
      {props.title ?
        <div className="portlet-title">
          <div className="caption font-blue">
            <span className="caption-subject bold">{props.title}</span>
          </div>
        </div>
        : ''
      }
      <div className="portlet-body">
        {props.children}
      </div>
    </div>
  );
}

Portlet.propTypes = {
  title: PropTypes.string
};

export default Portlet;