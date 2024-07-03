import styles from './styles.module.scss';
import SideMenu from "@/components/molecule/side-menu";
import type {FC} from "react";
import type {TPageLayoutProps} from "@/layout/page-layout/types";

const PageLayout: FC<TPageLayoutProps> = ({children}) => {
    return <section className={styles.wrapper}>
        <div className={styles.menu}>
            <SideMenu/>
        </div>
        <div className={styles.main}>
            {children}
        </div>

    </section>
}

export default PageLayout