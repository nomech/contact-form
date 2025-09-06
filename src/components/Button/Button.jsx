import React from 'react';
import styles from './Button.module.css';

const Button = ({ type = 'button', variant = 'primary', children, onClick, ariaLabel }) => {
	return (
		<button
			type={type} // semantic button type
			onClick={onClick}
			aria-label={ariaLabel}
			className={`${styles.button} ${styles[variant] || ''}`}
		>
			{children}
		</button>
	);
};

export default Button;
