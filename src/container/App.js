import { useState, useEffect } from 'react';
import { fetchHeroes } from '../services/api';
import CardsList from '../components/CardsList/CardsList';
import Loading from '../components/Loading/Loading';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import styles from './App.module.css';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const heroesData = await fetchHeroes();
        setHeroes(heroesData);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className={styles.appContainer}>
      <header>
        <h1>COMICS SUPER-HEROES</h1>
      </header>
      <main>
        {loading && <Loading />}
        {errorMessage && <ErrorPage message={errorMessage} />}
        {!loading && !errorMessage && <CardsList heroes={heroes} />}
      </main>
      <footer className="f3">
        All data and images from <a href="https://akabab.github.io/superhero-api/">superhero-api.com</a>{' '}
      </footer>
    </div>
  );
}

export default App;
