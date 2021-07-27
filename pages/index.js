import Link from 'next/link'
import styles from '../styles/index.module.scss'
export default function Intro() {
    return (
        <div className={styles.background}>
            <h1 className={styles.title}>{`<`}Brandon Frausto{`>`}</h1>

            <div className={styles.linkContainer}>
                <Link href='/projects'><a> Projects </a></Link>
                <Link href='/about'><a> About </a></Link>
                <Link href='/contact'><a> Contact </a></Link>
            </div>
        </div>
    )
}