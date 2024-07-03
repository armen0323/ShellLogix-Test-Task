"use client"
import React, { forwardRef } from "react";
import styles from './styles.module.scss';
import { IInputProps } from "@/components/atom/input-component/types";
import { TextFieldStyled } from "@/components/atom/input-component/input.styled";

const InputComponent = forwardRef<HTMLInputElement, IInputProps>(({ label, warning, error, ...rest }, ref) => {
    return (
        <div className={styles.wrapper}>
            {label && <p className={styles.label}>{label}</p>}
            <TextFieldStyled ref={ref} {...rest} />
            {warning && <p className={styles.warning}>{warning}</p>}
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
});

export default InputComponent;
