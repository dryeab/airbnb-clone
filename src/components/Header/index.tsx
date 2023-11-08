import Logo from "./Logo";
import styles from "@/styles/Header/Header.module.css";
import Search from "./Search";
import Profile from "./Profile";

export default function Header() {
  return (
    <nav className={styles.header}>
      <Logo />
      <Search />
      <Profile />
    </nav>
  );
}
