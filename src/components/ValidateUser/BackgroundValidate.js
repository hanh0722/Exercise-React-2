import React from 'react';
import styles from './BackgroundValidate.module.css';
const BackgroundValidate = ({changeHandler}) =>{
    return(
        <div onClick={changeHandler} className={styles['background-validate']}>
        </div>
    )
}

export default BackgroundValidate;