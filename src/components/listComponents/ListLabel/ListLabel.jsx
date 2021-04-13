import styles from './ListLabel.module.css'
import {v4} from "uuid";

const ListLabel = ({listLabels, listColumnHeight}) => {

    const listRowStyle = {
        display: "grid",
        alignContent: "start",
        gridTemplateColumns: listColumnHeight,
    }

    return(
        <div style={listRowStyle}>
            {listLabels.map((listLabel) => (
                <p key={v4()} className={styles.label}>{listLabel}</p>
            ))}
        </div>
    )
}

export default ListLabel