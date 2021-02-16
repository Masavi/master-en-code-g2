import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ shows }) => {
  console.log('En Home:', shows);
  return ( 
    <h1>Home</h1>
  );
}

Home.propTypes = {
  shows: PropTypes.array.isRequired,
}
 
export default Home;