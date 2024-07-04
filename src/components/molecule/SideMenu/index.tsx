"use client";
import { usePathname } from "next/navigation";
import { Category } from "@/components";

import styles from "./styles.module.scss";
import { categoryData } from "./utils";

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
