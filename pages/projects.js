
import Cards from '../comps/Cards';
import styles from '../styles/projects.module.scss';
import Navbar from '../comps/Navbar';
import CardInfo from '../comps/Card_info_file';

export default function Projects() {
    const { WonTonSoup, ApiTranslator }=CardInfo;
    return (
        <>


            <Navbar />
            <div className={styles.Background}>
                <div className={styles.CardContainer}>

                    <Cards
                        title={WonTonSoup.title}
                        description={WonTonSoup.description}
                        liveSite={WonTonSoup.liveSite}
                        sourceCode={WonTonSoup.sourceCode}
                        img={WonTonSoup.img} />

                    <Cards
                        title={ApiTranslator.title}
                        description={ApiTranslator.description}
                        liveSite={ApiTranslator.liveSite}
                        sourceCode={ApiTranslator.sourceCode}
                        img={ApiTranslator.img} />



                </div>
            </div>

        </>
    )
}