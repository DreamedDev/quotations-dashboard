import styles from './DoubleRowText.module.css'

const DoubleRowText = ({firstLine, secondLine, type}) => {
    return(
        <div className={styles.DoubleRowText}>
            <p className={styles.FirstLine} style={type==="slim" ? {fontWeight: "normal"} : {}}>{firstLine}</p>
            <p className={styles.SecondLine}>{secondLine}</p>
        </div>
    )
}

export default DoubleRowText