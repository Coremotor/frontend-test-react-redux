import React from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a href="http://localhost:3000" className={styles.link}>Вход в кабинет</a>
                </li>
                <li className={styles.item}>
                    <a href="http://localhost:3000" className={styles.link}>Служба поддержки</a>
                </li>
                <li className={styles.item}>
                    <a href="http://localhost:3000" className={styles.link}>Контакты</a>
                </li>
            </ul>
        </nav>
    )
}