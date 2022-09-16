import styles from '../styles/home.module.scss';
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Mind news | Início</title>
            </Head>
            <h1 className={styles.title}>Hellow world</h1>
        </>
    );
}
