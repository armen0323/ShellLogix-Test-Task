"use client";

import styles from "./styles.module.scss";
import { Category } from "@/components";
import { categoryData } from "@/components/molecule/side-menu/utils";
import { usePathname } from "next/navigation";

const SideMenu = () => {
  const pathname = usePathname();
  return (
    <div className={styles.wrapper}>
      {categoryData.map((element, index) => (
        <Category
          isActive={pathname === element.navigate}
          navigate={element.navigate}
          key={index}
          name={element.name}
          Icon={element.Icon}
        />
      ))}
    </div>
  );
};
export default SideMenu;
