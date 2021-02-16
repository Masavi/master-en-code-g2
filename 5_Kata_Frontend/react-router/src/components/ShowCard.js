import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from 'reactstrap';

const ShowCard = ({ id, image, summary, name }) => {
  return (
    <div>
      <Link to={`shows/${id}`} style={{ textDecoration: 'none' }}>
        <Card style={{ width: '250px' }}>
          <CardImg top width="100%" src={ image } alt="Show Image" />
          <CardBody>
            <CardTitle tag="h5">{ name }</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">{ id }</CardSubtitle>
            <CardText>{ summary }</CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

ShowCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default ShowCard;