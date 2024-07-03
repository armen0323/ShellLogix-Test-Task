"use client"
import React, {FC, ReactNode} from "react";
import type {ButtonProps as MUIButtonProps} from "@mui/material/Button";
import {ButtonStyled} from "@/components/atom/button/button.styled";

export interface TButtonProps extends MUIButtonProps {
    children: ReactNode;
    variant: 'text' | 'outlined' | 'contained',
}

const ButtonComponent: FC<TButtonProps> = ({children, variant, ...rest}) => {
    return (
        <ButtonStyled variant={variant} {...rest}>
            {children}
        </ButtonStyled>
    );
};

export default ButtonComponent;