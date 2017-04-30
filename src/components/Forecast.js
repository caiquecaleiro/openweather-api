import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import PageContainer from './PageContainer';
import Portlet from './Portlet';

function formatDate(date) {
  return Moment(new Date(date * 1000)).format('ddd Do MMM');
}

function renderTemperature(description, temperature) {
  return (
    <div className="col-6">
      <strong className="text-center-block">{description}</strong>
      <span className="text-center-block">{`${temperature} °C`}</span> 
    </div>
  );
}

function Forecast(props) {
  const { date, maxTemp, minTemp, icon } = props;

  return (
    <PageContainer>
      <Portlet title={formatDate(date)}>
        <div className="row">
          <div className="col-12">
            <div className="image-center">
              <img src={`http://openweathermap.org/img/w/${icon}.png`} /> 
            </div>
          </div>
          {renderTemperature('Min', minTemp)}
          {renderTemperature('Max', maxTemp)}
        </div>
      </Portlet>
    </PageContainer>
  );
}

Forecast.propTypes = {
  date: PropTypes.number.isRequired,
  maxTemp: PropTypes.number.isRequired,
  minTemp: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired
};

export default Forecast;