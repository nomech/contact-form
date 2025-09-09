import React from 'react';
import styles from './Toast.module.css';

const Toast = ({ title, message, icon, isVisible }) => {
	return (
		<div className={`${styles.toast} ${isVisible ? styles.visible : ''}`}>
			<div className={styles.header}>
				<img src={icon} alt="toast icon" />

				<h1 className={styles.title}>{title}</h1>
			</div>
			<p className={styles.message}>{message}</p>
		</div>
	);
};

export default Toast;
