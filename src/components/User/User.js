import React from 'react';
import styles from './User.module.css';
const User = ({name, age}) =>{
    return(
        <div className={styles.user}>
            <span>{name}</span>
            <span>({`${age} years old`})</span>
        </div>
    )
}

export default User