"use client";
import type { FC } from "react";
import classNames from "classnames";
import { useRouter } from "next/navigation";

import styles from "./styles.module.scss";
import type { TCategoryType } from "./types";
import IconComponent from "../icon-component";

const Category: FC<TCategoryType> = ({ name, Icon, navigate, isActive }) => {
  const router = useRouter();
  return (
    <div
      className={classNames(styles.wrapper, isActive && styles.active)}
      onClick={() => router.push(navigate)}
      role="button"
    >
      <IconComponent icon={Icon} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default Category;
