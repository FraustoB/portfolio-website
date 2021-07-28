import CardInfo from './Card_info_file';
import styles from '../styles/card.module.scss'

export default function Cards({ title, description, sourceCode, liveSite, img }) {


    return (
        <div>
            <div className={styles.Card} >
                <img src={img} alt={`${title}-img`} />
                <div className="card-body">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className={styles.BtnContainer}>
                    <a target="_blank" rel="noreferrer" href={liveSite} className="btn btn-secondary">Demo Site</a>
                    <a target="_blank" rel="noreferrer" href={sourceCode} className="btn btn-secondary">{'<'}Source{'>'}</a>
                </div>

            </div>

        </div>
    )
}