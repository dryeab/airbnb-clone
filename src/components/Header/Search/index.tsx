import SearchIcon from "./SearchIcon";

import styles from "@/styles/Header/Search/Search.module.css";

export default function Search() {
  return (
    <div className={styles.search}>
      <div className={styles.anywhere}>Anywhere</div>
      <div className={styles.anyweek}>Any week</div>
      <div className={styles.addguests}>Add guests</div>
      <SearchIcon />
    </div>
  );
}
