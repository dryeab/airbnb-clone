import type { RootState } from "@/store";
import styles from "@/styles/Header/Profile/Menu.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

function Row({ text, bold, link }: { text: string, bold: boolean, link: string }) {
    return <div className={`${styles["menu-row"]} ${bold ? styles.bold : ""}`}>
        <Link href={link}>{text}</Link>
    </div>
}

export default function Menu() {
    const isHidden = useSelector((state: RootState) => state.profile.hidden);

    return <div className={`${styles.menu} ${isHidden ? styles.hide : ""}`}>
        <div>
            <Row text="Sign up" bold={true} link={"/signup"} />
            <Row text="Log in" bold={false} link={"/login"} />
        </div>
        <div>
            <Row text="Gift cards" bold={false} link={"/gift"} />
            <Row text="Airbnb your home" bold={false} link={"/home"} />
            <Row text="Help center" bold={false} link={"/help"} />
        </div>
    </div>
}