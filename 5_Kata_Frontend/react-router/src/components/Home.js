import React from 'react';
import PropTypes from 'prop-types';
import ShowCard from './ShowCard';

const Home = ({ shows }) => {
  // shows.show ->
  // show.name
  // show.image.medium
  // show.summary

  const showResults = () => {
    return shows.map(showObject => {
      const { show } = showObject
      return <ShowCard
                key={show.id}
                id={show.id}
                image={
                  show.image
                    ? show.image.medium
                    : ''
                }
                summary={show.summary}
                name={show.name} />
    });
  };

  return (
    <>
      {
        shows.length > 0
          ? showResults()
          : <h1>Home</h1>
      }
    </>
  );
}

Home.propTypes = {
  shows: PropTypes.array.isRequired,
}
 
export default Home;