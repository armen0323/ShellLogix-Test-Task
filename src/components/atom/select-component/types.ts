import {TextFieldProps} from "@mui/material";

export interface ISelectProps extends Omit<TextFieldProps, "label"> {
    label?: string,
    warning?: string
}