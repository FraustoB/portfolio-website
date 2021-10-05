import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/about.module.scss';
import Navbar from '../comps/Navbar';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

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
                    <p> Fullstack Web Developer currently living in Arlington Texas. Passionate about software developement,
                        in love with learning new technologies, and creating Reactive Web applications. Open for relocation and remote work </p>

                    <div className={styles.Links}>
                        <a rel="noreferrer noopener" target="_blank" href='https://github.com/FraustoB'><span> <FaGithub /></span> Github</a>
                        <a rel="noreferrer noopener" target="_blank" href='https://www.linkedin.com/in/brandon-s-frausto-13a712213/'> <span><FaLinkedin /></span> Linkedin </a>
                    </div>
                    <div className={styles.Resume}>
                        <a rel="noreferrer noopener" target="_blank" href='https://drive.google.com/file/d/1kwo5AGmRNz6NM71T8mJRuV6aTuug_ujG/view?usp=sharing'><h2>Resume</h2></a>
                    </div>


                </div>
            </div>
        </>
    )
}