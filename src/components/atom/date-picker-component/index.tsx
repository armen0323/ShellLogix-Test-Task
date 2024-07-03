"use client";
import React, { FC, forwardRef, ForwardedRef } from "react";
import { Dayjs } from "dayjs";
import styles from './styles.module.scss';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePickerProps } from "@mui/x-date-pickers";
import { CustomDatePicker } from "@/components/atom/date-picker-component/datePicker.styled";

const DatePickerComponent: FC<DatePickerProps<Dayjs>> = forwardRef(({
                                                                        label,
                                                                        error,
                                                                        value,
                                                                        onChange,
                                                                        ...rest
                                                                    }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className={styles.wrapper}>
            {label && <p className={styles.label}>{label}</p>}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CustomDatePicker
                    ref={ref}
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
            </LocalizationProvider>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
});

export default DatePickerComponent;
