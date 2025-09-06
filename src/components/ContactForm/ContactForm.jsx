import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';

const ContactForm = () => {
	return (
		<form className={styles.form}>
			<h2 className={styles.formTitle}>Contact us</h2>
			<fieldset className={styles.fieldset}>
				<div className={styles.groupedInput}>
					<InputField
						label={'First Name *'}
						id={'FirstName'}
						register={'firstName'}
						mandatory={true}
					/>
					<InputField
						label={'Last Name *'}
						id={'LastName'}
						register={'firstName'}
						mandatory={true}
					/>
				</div>
				<div className={styles.groupedInput}>
					<InputField label={'Email Address *'} id={'email'} mandatory={true} />
				</div>
			</fieldset>
			<fieldset className={styles.fieldset}>
				<legend>Query type *</legend>
				<div className={styles.groupedInput}>
					<InputField
						label={'General Enquiry'}
						type={'radio'}
						name={'query'}
						id={'general'}
					/>
					<InputField
						label={'Support Request'}
						type={'radio'}
						name={'query'}
						id={'support'}
					/>
				</div>
			</fieldset>
			<fieldset className={styles.fieldset}>
				<div className={styles.groupedInput}>
					<InputField
						label={'Message *'}
						type={'textarea'}
						name={'query'}
						id={'support'}
					/>
				</div>

				<InputField
					label={'I consent to being contacted by the team'}
					type={'checkbox'}
					id={'support'}
				/>
			</fieldset>
			<Button type={'submit'}> Submit </Button>
		</form>
	);
};

export default ContactForm;
