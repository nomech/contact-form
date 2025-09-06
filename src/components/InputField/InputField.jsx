import styles from './InputField.module.css';

const InputField = ({ type = 'text', label, id, name, register, errors }) => {
	errors && console.log(errors);

	return (
		<div className={styles.fieldGroup}>
			<label htmlFor={id}>{label}</label>
			{type === 'textarea' && <textarea id={id} name={name || id} {...register(id)} />}
			{type !== 'textarea' && (
				<input type={type} id={id} name={name || id} {...register(id)} />
			)}
			{errors[id] && <p className={styles.error}>{errors[id].message}</p>}
		</div>
	);
};

export default InputField;
