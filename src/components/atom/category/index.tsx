"use client"

import styles from './styles.module.scss';
import type {FC} from "react";
import type {TCategoryType} from "@/components/atom/category/types";
import IconComponent from "../icon-component";
import {useRouter} from "next/navigation";
import classNames from "classnames";

const Category: FC<TCategoryType> = ({name, Icon, navigate, isActive}) => {
    const router = useRouter()
    return (
        <div className={classNames(styles.wrapper, isActive && styles.active)} onClick={() => router.push(navigate)}
             role='button'>
            <IconComponent icon={Icon}/>
            <p className={styles.name}>{name}</p>
        </div>
    )
}

export default Category