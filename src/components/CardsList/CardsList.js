import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './CardsList.module.css';

const CardList = ({ heroes }) => (
  <ul className={styles.list}>
    {heroes.map(({ id, name, biography, images }) => (
      <Card key={id} id={id} name={name} publisher={biography.publisher} image={images.md} />
    ))}
  </ul>
);

CardList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object)
};

CardList.defaultProps = {
  heroes: []
};

export default CardList;
