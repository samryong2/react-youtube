import React from 'react';
import styles from './search_header.module.css';
const SearchHeader = (props) => (
            
    <header className={styles.header}>
        <img className={styles.img} src="/images/youtube.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
        <input className={styles.input} type="search" placeholder="Search..."/>
        <button className={styles.button} type="submit">
            <img className={styles.searchImg} src="/images/search.png" alt="search" />
        </button>
    </header>

    );

export default SearchHeader;