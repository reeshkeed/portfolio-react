import { Navbar } from '@components/common/Navbar/Navbar';
import logo from '@assets/logo.svg';
import styles from './Home.module.css';
import { Landing } from './components/Landing/Landing';
import { Projects } from './components/Projects/Projects';

export const Home = () => {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <Landing />

      <Projects />

      <img className={styles['spinning-logo']} src={logo} alt="Girish Daloso" />
    </main>
  );
};
