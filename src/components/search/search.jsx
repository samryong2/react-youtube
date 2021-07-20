import React from 'react';
import styles from './search.module.css';
const Search = (props) => (
            
    <nav className={styles.nav}>
        <img src="" alt="" className="logo" />
        <h1 className="title">Youtube</h1>
        <div className="search-wrap">
            <input type="text" className="search-wrap__input" />
            <i className="search-wrap__cancel"></i>
        </div>
        <button className="btn">
            <i></i>
        </button>
    </nav>

    );

export default Search;