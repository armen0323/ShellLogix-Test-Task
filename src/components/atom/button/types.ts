import {ButtonProps} from "@mui/material/Button";
import {ReactNode} from "react";

export interface TButtonProps extends Omit<ButtonProps, "children"> {
    children: ReactNode;
}