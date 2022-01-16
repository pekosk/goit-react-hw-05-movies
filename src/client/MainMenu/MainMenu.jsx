import MainMenuItem from './MainMenuItem';
import styles from './MainMenu.module.css';
import { items } from './items';

const MainMenu = () => {
    const elements = items.map(item => <MainMenuItem key={item.id} {...item} />)
    return (
        <div className={styles['box-menu']}>
            <ul className={styles.menu}>
                {elements}
            </ul>
        </div>
    )
}

export default MainMenu;