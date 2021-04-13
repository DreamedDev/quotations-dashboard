import styles from './SelectList.module.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useState} from "react";
import {v4} from "uuid";

const SelectList = ({items, selected=0}) => {
    
    const [selectList, setSelectList] = useState({
        display: "none",
        text: items[selected].text,
        color: items[selected].color,
        backgroundColor: items[selected].backgroundColor
    })

    const onSelectedClick = () => {
        //setActive("block")
        setSelectList({
            display: "block",
            text: selectList.text,
            color: selectList.color,
            backgroundColor: selectList.backgroundColor
        })
    }

    const onMouseLeave = () => {
        //setActive("none")
        setSelectList({
            display: "none",
            text: selectList.text,
            color: selectList.color,
            backgroundColor: selectList.backgroundColor
        })
    }

    const selectOpt = (text, color, backgroundColor) => {
        setSelectList({
            display: "none",
            text: text,
            color: color,
            backgroundColor: backgroundColor
        })
    }

    return(
        <div className={styles.Container}>
            <div className={styles.SelectList} >
                <div className={styles.Selected} onClick={() => onSelectedClick()}
                    style={{
                        color: selectList.color,
                        backgroundColor: selectList.backgroundColor
                    }}
                >
                    <p>{selectList.text}</p>
                    <ArrowDropDownIcon/>
                </div>
                <div className={styles.ItemsContainer} onMouseLeave={() => onMouseLeave()}
                     style={{display: selectList.display}}>
                    <div className={styles.Items}>

                        {items.map((item) => (
                            <p key={v4()} onClick={() => selectOpt(item.text, item.color, item.backgroundColor)}>{item.text}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectList