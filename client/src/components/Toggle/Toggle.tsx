import React from 'react';
import styles from './Toggle.module.scss';
import {IToggleProps} from "../../interfaces/IToggleProps";
const Toggle = ({handleToggle}: IToggleProps) => {

  return (
    <label className={`${styles.toggle}`}>
      <input type="checkbox" onClick={handleToggle} />
      <span className={`${styles.slider} ${styles.round}`}></span>
      <span className={styles.labelText}>6 Months</span>
      <span className={styles.labelText}>All Time</span>
    </label>
  );
};

export default Toggle;
