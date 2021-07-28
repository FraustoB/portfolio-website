import Link from 'next/link';
import styles from '../styles/navbar.module.scss';
import { useState } from 'react';


export default function Navbar() {

    const [isToggled, setIsToggled]=useState(false)

    const handleIsToggled=() => {
        setIsToggled(!isToggled)
    }
    return (
        <nav className={styles.nav}>

            <div className={styles.Navbar}>
                <Link href='/'><a style={{ textDecoration: 'none' }}> <div className={styles.Brand}>{'<'}frausto.dev{'>'}</div> </a></Link>
                <button onClick={handleIsToggled}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>


                <div className={styles.LinksContainer} onClick={handleIsToggled} style={isToggled? { display: 'flex' }:{ display: '' }}>
                    <ul>
                        <li><Link className={styles.Links} href='/projects'><a> Projects </a></Link></li>
                        <li><Link className={styles.Links} href='/about'><a> About </a></Link></li>
                        <li><Link className={styles.Links} href='/contact'><a> Contact </a></Link></li>
                    </ul>

                </div>

            </div>
        </nav>
    )
}