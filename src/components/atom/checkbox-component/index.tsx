"use client"
import { FC, ForwardedRef, forwardRef } from "react";
import { Checkbox } from "@mui/material";
import styles from './styles.module.scss';
import FormControlLabel from "@mui/material/FormControlLabel";
import { ICheckboxProps } from "@/components/atom/checkbox-component/types";

const CheckboxComponent: FC<ICheckboxProps> = forwardRef(({ label, error, ...rest }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className={styles.wrapper}>
            <FormControlLabel
                control={<Checkbox {...rest} inputRef={ref} />}
                label={label}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
});

export default CheckboxComponent;
