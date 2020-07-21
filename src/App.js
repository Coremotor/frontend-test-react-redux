import React from 'react';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import styles from './App.module.css';

export default function App() {

    return (
        <div className={styles.container}>
            <Header/>

            <main>
                <Form/>
                <Navigation/>
            </main>

            <Footer/>
        </div>
    )
}