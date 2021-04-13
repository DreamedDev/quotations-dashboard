import styles from './Search.module.css'
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
    return(
        <div className={styles.Search}>
            <SearchIcon className={styles.SearchIcon}/>
            <input type="text" placeholder="Search by title, owner or vendor ..."/>
        </div>
    )
}

export default Search;