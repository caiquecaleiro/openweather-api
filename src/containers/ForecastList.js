import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Forecast from '../components/Forecast';
import Portlet from '../components/Portlet';
import PageContainer from '../components/PageContainer';
import SearchBar from './SearchBar';

export class ForecastList extends Component {
  renderForecast(data) {
    return (
      <div key={data.dt} className="col-xs-12 col-sm-6 col-md-4">
        <Forecast 
          date={data.dt} 
          minTemp={Math.round(data.temp.min)}
          maxTemp={Math.round(data.temp.max)}
          icon={data.weather[0].icon}
        />
      </div>
    );
  }

  renderForecastList() {
    if (!this.props.forecast.all.city && !this.props.forecast.all.list) { 
      return null; 
    }

    const { name, country } = this.props.forecast.all.city; 

    return (
      <PageContainer>
        <Portlet title={`${name}, ${country}`}>
          <div className="row">
            {!this.props.forecast.all.list ? '' :
              this.props.forecast.all.list.map(this.renderForecast)
            }
          </div>
        </Portlet>
      </PageContainer>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <SearchBar />
        </div>
        <div className="col-12">
          {this.renderForecastList()}
        </div>
      </div>
    );
  }
}

ForecastList.propTypes = {
  forecast: PropTypes.object.isRequired
}

function mapStateToProps({ forecast }) {
  return { forecast };
}

export default connect(mapStateToProps)(ForecastList);