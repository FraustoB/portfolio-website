import Head from 'next/head';

import styles from '../styles/about.module.scss';
import Navbar from '../comps/Navbar';

export default function About() {

    return (
        <>
            <Head>
                <title> frausto | About </title>
                <meta name='keywords' content='frausto' />
            </Head>

            <Navbar />
            <div className={styles.Background}>

                <div className={styles.Container}>
                    <p> Fullstack Web Developer currently living in Arlington Texas. Passionate about software developement
                        in love with learning new technologies, and creative Reactive Web applications. Willing to work for any timezone and any location </p>

                    <div className={styles.Links}>
                        <a rel="noreferrer noopener" target="_blank" href='https://github.com/FraustoB'><img alt='github' src="/github.png" /></a>
                        <a rel="noreferrer noopener" target="_blank" href='https://www.linkedin.com/in/brandon-frausto-13a712213/'><img alt='linkedin' src="/linkedin.png" /> </a>
                    </div>

                    <div className={styles.Resume}>
                        <a rel="noreferrer noopener" target="_blank" href='https://rxresu.me/r/ksluh6'><h2>Resume</h2></a>
                    </div>


                </div>
            </div>
        </>
    )
}