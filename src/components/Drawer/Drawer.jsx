import styles from './Drawer.module.css'

import { useState } from 'react'
import {
    DescriptionOutlined,
    HomeOutlined,
    InboxOutlined,
    LocalShippingOutlined, PersonOutline,
    ShoppingCartOutlined
} from "@material-ui/icons";

const Drawer = () => {

    const [active, setActive] = useState(2)

    const options=[{
        id: 0,
        icon: <HomeOutlined/>
    },{
        id: 1,
        icon: <InboxOutlined/>
    },{
        id: 2,
        icon: <DescriptionOutlined/>
    },{
        id: 3,
        icon: <ShoppingCartOutlined/>
    },{
        id: 4,
        icon: <LocalShippingOutlined/>
    },{
        id: 5,
        icon: <PersonOutline/>
    }]

    return(
        <div className={styles.DrawerContainer}>
            <div className={styles.Drawer}>

                {options.map((option) => (
                    <i key={option.id}
                       className={active === option.id ? styles.Clicked : ""}
                       onClick={() => setActive(option.id)}>
                        {option.icon}
                    </i>
                ))}


            </div>
        </div>
    )
}

export default Drawer