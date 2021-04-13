import styles from './Header.module.css'
import Button from "../Button/Button";
import Search from "../Search/Search";

const Header = () => {

    return(
        <div className={styles.Header}>
            <div className={styles.MainArea}>
                <p>Request for Quotations</p>
                <Button text="Create New" type="Action" icon="null"/>
            </div>
            <div className={styles.FilterArea}>
                <div className={styles.Filter}>
                    <Button text="Filter" type="FilterWhite" icon="filter_list"/>
                    <Button text="Sort" type="FilterColor" icon="sort"/>
                </div>
                <Search/>
            </div>
        </div>
    )
}

export default Header;