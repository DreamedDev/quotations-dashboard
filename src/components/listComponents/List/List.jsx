import ListLabel from "../ListLabel/ListLabel";
import ListRows from "../ListRows/ListRows";
import styles from './List.module.css'

const List = ({listColumnHeight, listLabels, listRows}) => {

    /*const listStyle = {
        display: "grid",
        alignContent: "start",
        gridTemplateColumns: listColumnHeight,
    }*/

    return(
        <div className={styles.List}>
            <ListLabel listLabels={listLabels} listColumnHeight={listColumnHeight}/>
            <ListRows listRows={listRows} listColumnHeight={listColumnHeight}/>
        </div>
    )
}

export default List