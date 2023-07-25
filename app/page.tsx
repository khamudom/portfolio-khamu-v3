import { Hero } from './components';
import Experience from './components/Experience/Experience';
import styles from './styles/page.module.css';

const Home = () => {
  return (
    <section>
      <Hero />
      <Experience />
    </section>
  );
};

export default Home;
