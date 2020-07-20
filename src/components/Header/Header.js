import React from 'react';
import Logo from '../../img/logo.svg';
import styles from './Header.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={Logo} alt="logo" />
        </header>
    )
}