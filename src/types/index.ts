import {FC, SVGProps, Dispatch, SetStateAction} from "react";
import * as icons from "@/assets";

export type IconType = keyof typeof icons;

export type useStateType<T> = Dispatch<SetStateAction<T>>;