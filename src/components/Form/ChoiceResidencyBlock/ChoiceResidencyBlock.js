import React from "react";
import styles from "../Form.module.css";

export const ChoiceResidencyBlock = () => {
    return (
        <div className={styles["buttons-wrapper"]}>
            <button className={[styles.btn, styles["btn-resident"]].join(' ')} type="button">Резидент России
            </button>

            <button className={[styles.btn, styles["btn-non-resident"]].join(' ')} type="button">Нерезидент
            </button>
        </div>
    )
}