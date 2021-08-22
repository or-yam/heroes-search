import PropTypes from 'prop-types';
import styles from './Card.module.css';

const DEFAULT_IMAGE =
  'https://www.pinclipart.com/picdir/big/560-5604123_silhouette-clipart-superhero-silhouette-superhero-transparent-background-png.png';

const Card = ({ name, publisher, image }) => (
  <li className={styles.card} data-testid="hero-card">
    <img className={styles.cardImage} loading="lazy" alt="hero profile" src={image} width="200" height="200" />
    <div className={styles.cardContent}>
      <h2>{name}</h2>
      <h3>{publisher}</h3>
    </div>
  </li>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  publisher: PropTypes.string,
  image: PropTypes.string
};

Card.defaultProps = {
  publisher: 'Unknown',
  image: DEFAULT_IMAGE
};

export default Card;
