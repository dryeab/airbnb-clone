import styles from "@/styles/Header/Search/SearchIcon.module.css";

export default function SearchIcon() {
  return (
    <div className={styles["search-icon"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        fill="red"
      >
        <path
          fill="none"
          d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
        ></path>
      </svg>
    </div>
  );
}
