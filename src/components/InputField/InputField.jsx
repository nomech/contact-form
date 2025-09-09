import styles from './InputField.module.css';

const InputField = ({
	type = 'text',
	label,
	id,
	name,
	value,
	register,
	errors,
	showError = true,
}) => {
	return (
		<div className={styles.inputContainer}>
			<div className={styles.fieldGroup}>
				<label htmlFor={id}>{label}</label>
				{type === 'textarea' && <textarea id={id} {...register(name)} />}
				{type === 'radio' && (
					<input type={type} id={id} {...register(name)} value={value} />
				)}
				{type !== 'textarea' && type !== 'radio' && (
					<input type={type} id={id} {...register(name)} />
				)}
			</div>

			{showError && errors?.[name] && <p className={styles.error}>{errors[name].message}</p>}
		</div>
	);
};

export default InputField;
