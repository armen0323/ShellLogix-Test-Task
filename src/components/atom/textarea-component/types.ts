import {CheckboxProps} from "@mui/material";

export interface ICheckboxProps extends Omit<CheckboxProps, "label" | "error"> {
    label?: string,
    error?: string
}