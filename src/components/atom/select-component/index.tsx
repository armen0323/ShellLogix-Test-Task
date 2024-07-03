"use client";
import React, { FC, useState, forwardRef, ForwardedRef } from "react";
import styles from './styles.module.scss';
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { ISelectProps } from "@/components/atom/select-component/types";
import { SelectStyled } from "@/components/atom/select-component/select.styled";

const SelectComponent: FC<ISelectProps> = forwardRef(({
                                                          label,
                                                          warning,
                                                          value: propValue,
                                                          onChange: propOnChange,
                                                          ...rest
                                                      }, ref: ForwardedRef<HTMLSelectElement>) => {
    const [value, setValue] = useState(propValue || '');

    const handleChange = (event: SelectChangeEvent<{ value: unknown }>) => {
        const newValue = event.target.value as string;
        setValue(newValue);
        if (propOnChange) {
            propOnChange(event);
        }
    };

    return (
        <div className={styles.wrapper}>
            {label && <p className={styles.label}>{label}</p>}
            <SelectStyled
                ref={ref}
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={value}
                onChange={handleChange}
                {...rest}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </SelectStyled>
            {warning && <p className={styles.warning}>{warning}</p>}
        </div>
    );
});

export default SelectComponent;
