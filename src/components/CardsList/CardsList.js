import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './CardsList.module.css';

const CardList = ({ heroes }) =>
  heroes.length > 0 ? (
    <ul className={styles.list}>
      {heroes.map(({ id, name, biography, images }) => (
        <Card key={id} id={id} name={name} publisher={biography.publisher} image={images.md} />
      ))}
    </ul>
  ) : (
    <p className={styles.noHeroesMessage} data-testid="empty-message">
      Couldn&apos;t find heroes
    </p>
  );

CardList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.object)
};

CardList.defaultProps = {
  heroes: []
};

export default CardList;
