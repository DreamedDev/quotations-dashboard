import styles from './Participant.module.css'

const Participant = ({participant}) => {
    return(
        <div className={styles.Participant}>
            <img src={participant.image} alt="Participant"/>
            <div style={participant.messageCount === 0 ? {display: "none"} : {}} className={styles.Messages}>+{participant.messageCount}</div>
            <div className={styles.ParticipantName} style={participant.messageCount !== 0 ? {fontWeight: "normal"} : {}}>
                {participant.name}
            </div>
        </div>
    )
}

export default Participant