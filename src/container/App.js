import CardsList from '../components/CardsList/CardsList';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <header>
        <h1>COMICS SUPER-HEROES</h1>
      </header>
      <main>
        <CardsList />
      </main>
      <footer className="f3">
        All data and images from <a href="https://akabab.github.io/superhero-api/">superhero-api.com</a>{' '}
      </footer>
    </div>
  );
}

export default App;
