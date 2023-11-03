import Humberger from "./Humberger";
import Language from "./Language";

import styles from "@/styles/Header.module.css";

export default function Profile() {
  return (
    <div className={styles.profile}>
      <button className={styles.home}>Aibnb your home</button>
      <Language />
      <Humberger />
    </div>
  );
}
