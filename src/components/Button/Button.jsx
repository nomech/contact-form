import React from 'react';
import styles from './Button.module.css';

const Button = ({ type = 'button', variant = 'primary', children, onClick, ariaLabel }) => {
	return (
		<button
			type={type}
			onClick={onClick}
			aria-label={ariaLabel}
			className={`${styles.button} ${styles[variant] || ''}`}
		>
			{children}
		</button>
	);
};

export default Button;
