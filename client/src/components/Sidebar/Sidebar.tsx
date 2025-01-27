import React from "react";
import {ISidebarProps} from "../../interfaces/ISidebarProps";
import styles from './Sidebar.module.scss';
const Sidebar = ({ openModal }: ISidebarProps) => {
  return (
    <div className={styles.sidebarContainer}>
      <button className={styles.sidebarBtn} onClick={openModal}>
        <span>New Note</span>
      </button>
    </div>
  )
};

export default Sidebar;
