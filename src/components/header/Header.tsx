import { formatDate } from "../../utils/formatDate";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>New</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
