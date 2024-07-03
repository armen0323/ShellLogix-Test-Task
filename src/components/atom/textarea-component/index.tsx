"use client"
import {FC} from "react";
import styles from './styles.module.scss'
import {ICheckboxProps} from "@/components/atom/checkbox-component/types";
import {TextAreaStyled} from "@/components/atom/textarea-component/textarea.styled";

const TextareaComponent: FC<ICheckboxProps> = ({label, hint, error, ...rest}) => {
    return <div className={styles.wrapper}>
        {label && <p className={styles.label}>{label}</p>}
        <TextAreaStyled
            rows={3}
            fullWidth
            multiline
            variant="outlined"
        />
        {hint && <p className={styles.hint}>{hint}</p>}
        {error && <p className={styles.error}>{error}</p>}
    </div>
}
export default TextareaComponent
