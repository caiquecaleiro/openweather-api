import React from 'react';
import PropTypes from 'prop-types';

function SearchForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6">
          <div className="form-group">
            <input 
              placeholder="Get a five-day forecast in your city"
              className="form-control"
              value={props.term}
              onChange={props.onChange} 
            />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Search</button>
        </div>
      </div>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchForm;