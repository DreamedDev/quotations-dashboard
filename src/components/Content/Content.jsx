import styles from './Content.module.css'
import Header from "../Header/Header";
import List from "../listComponents/List/List";
import exampleListRows from '../../data/ExampleListRows'

const Content = () => {

    const exampleListColumnHeight = "0.75fr 5fr 2fr 2fr 3fr 3fr 1fr"
    const exampleListLabels = [null, "Inquiries", "Value(000 IDR)", "Date Created", "Participants", "Status", null]

    return(
        <div className={styles.Content}>
            <Header/>
            <List listColumnHeight={exampleListColumnHeight} listLabels={exampleListLabels} listRows={exampleListRows}/>
        </div>
    )
}

export default Content