import React from 'react';
import styles from './InputField.module.css';
import { ErrorMessage } from '@hookform/error-message';

const InputField = ({
	type = 'text',
	label,
	id,
	name,
	register,
	required = false,
	max = 10,
	min = 1,
	errors,
}) => {
	return (
		<div className={styles.fieldGroup}>
			<label htmlFor={id}>{label}</label>
			{type === 'textarea' && <textarea id={id} name={name || id}  />}
			{type !== 'textarea' && <input type={type} id={id} name={name || id} />}
			{errors && <ErrorMessage errors={errors} />}
		</div>
	);
};

export default InputField;
