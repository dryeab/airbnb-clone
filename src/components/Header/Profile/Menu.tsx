import type { RootState } from "@/store";
import styles from "@/styles/Header.module.css";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideHumbergerMenu, displayHumbergerMenu } from "@/store/profile";

function Row({ text, bold }: { text: string, bold: boolean }) {
    return <div className={`${styles["menu-row"]} ${bold ? styles.bold : ""}`}>
        {text}
    </div>
}

export default function Menu({ ref }: { ref: any }) {
    const isHidden = useSelector((state: RootState) => state.profile.hidden);
    const dispatch = useDispatch();

    console.log("value of hide2 is", isHidden);

    // const menuRef = useRef<HTMLUListElement>(null);

    // useEffect(() => {
    //     function handleClickOutside(event: MouseEvent) {
    //         console.log("The event is", event);
    //         if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
    //             dispatch(hideHumbergerMenu());
    //         }
    //     }

    //     document.addEventListener('click', handleClickOutside);

    //     return () => {
    //         document.removeEventListener('click', handleClickOutside);
    //     };
    // }, []);


    return <div ref={ref} className={`${styles.menu} ${isHidden ? styles.hide : ""}`}>
        <div>
            <Row text="Sign up" bold={true} />
            <Row text="Log in" bold={false} />
        </div>
        <div>
            <Row text="Gift cards" bold={false} />
            <Row text="Airbnb your home" bold={false} />
            <Row text="Help center" bold={false} />
        </div>
    </div>
}