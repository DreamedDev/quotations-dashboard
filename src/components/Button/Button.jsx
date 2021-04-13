import styles from './Button.module.css'
import cx from 'classnames'
import Icon from '@material-ui/core/Icon'

const Button = ({onClick, text, type, icon}) => {

    const btnType = {
        "Action": styles.Action,
        "FilterWhite": styles.FilterWhite,
        "FilterColor": styles.FilterColor
    }


    return(
        <div className={cx(styles.Button, btnType[type])} >
            <div>
                <p style={text !== "" && icon !== "null" ? {marginRight: "6px"} : {}}>{text}</p>
                {icon !== "null" ? <Icon style={{fontSize: 16}}>{icon}</Icon> : <></>}
            </div>
        </div>
    )
}

export default Button;