import styles from "@/styles/Header.module.css";
import Menu from "./Menu";
import { displayHumbergerMenu, hideHumbergerMenu } from "@/store/profile";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "@/store";
import { useEffect, useRef } from "react";

export default function Humberger() {
  const hide = useSelector((state: RootState) => state.profile.hidden);
  const dispatch: AppDispath = useDispatch();

  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      console.log("The event is", event);
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        dispatch(hideHumbergerMenu());
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <button className={styles.humberger} onClick={_ => {
      console.log("changed");
      dispatch(hide ? displayHumbergerMenu() : hideHumbergerMenu())
    }}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <g fill="none">
            <path d="M2 16h28M2 24h28M2 8h28"></path>
          </g>
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
        >
          <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
        </svg>
      </div>
      <Menu ref={menuRef} />
    </button>
  );
}
