import styles from './Image.module.css'

const Image = ({source}) => {

    return(
        <div className={styles.ImageContainer}>
            <div className={styles.Image} style={{ backgroundImage: `url(${source})` }}>
            </div>
        </div>
    )
}

export default Image