import * as icons from "@/assets";
import {type SVGProps, memo} from "react";
import {IconType} from "@/types";


interface IIconProps {
    icon: IconType;
    svgProps?: SVGProps<SVGSVGElement>;
    fill?: string;
    width?: string;
    height?: string;
}

const IconComponent = memo((props: IIconProps) => {
    const {svgProps, icon} = props;
    const xm = icons;
    const image: IconType | unknown = xm[icon];

    if (typeof image === "function") {
        return image({...svgProps});
    }
    return image;
});

IconComponent.displayName = "Icon";

export default IconComponent;
