import Image from "next/image";
import styles from "./styles.module.scss";
import { SignInButton } from "../SignInButton";

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src="/logo_mind_news.png" alt="Mind news" width={200} height={53} className={styles.image} />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}
