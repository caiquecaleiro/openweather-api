import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

import PageContainer from '../components/PageContainer';
import Portlet from '../components/Portlet';
import SearchForm from '../components/SearchForm';
import { fetchForecast } from '../actions/index';

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { city: '' };
  }

  onChange(event) {
    this.setState({ city: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.fetchForecast(this.state.city);
    this.setState({ city: '' });
  }

  renderAlert() {
    if (this.props.error) {
      return (      
        <div className="margin-top-25px">
          <Alert bsStyle="danger">
            <strong>Oops!</strong> {this.props.error}
          </Alert>
        </div>
      );
    }
  }

  render() {
    return (
      <PageContainer>
        <Portlet>
          <SearchForm 
            onSubmit={this.onSubmit.bind(this)}
            onChange={this.onChange.bind(this)}
            term={this.state.city}
          />
          {this.renderAlert()}
        </Portlet>
      </PageContainer>
    );
  }
}

SearchBar.propTypes = {
  fetchForecast: PropTypes.func.isRequired,
  error: PropTypes.string
};

function mapStateToProps(state) {
  return { 
    error: state.forecast.error
  };
}

export default connect(mapStateToProps, { fetchForecast })(SearchBar);