import {TextFieldProps} from "@mui/material";

export interface IInputProps extends Omit<TextFieldProps, "label" | "error"> {
    label?: string,
    warning?: string
    error?: string
}