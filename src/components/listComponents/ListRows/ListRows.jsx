import styles from './ListRows.module.css'
import {v4} from "uuid";

const ListRows = ({listRows, listColumnHeight}) => {

    const createRow = (row) => {

        const rowElements = []

        for (let columnNr = 0; columnNr < row.length; columnNr++) {
            rowElements.push(
                <div key={v4()}>
                    {row[columnNr]}
                </div>
            )
        }

        return rowElements
    }

    const listRowStyle = {
        gridTemplateColumns: listColumnHeight,
    }

    return(
        <>
            {listRows.map((listRow) => (
                <div key={v4()} className={styles.ListRow} style={listRowStyle}>
                    {createRow(listRow)}
                </div>
            ))}
        </>
    )
}

export default ListRows