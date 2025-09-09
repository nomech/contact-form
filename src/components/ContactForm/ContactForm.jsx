import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
import Toast from '../Toast/Toast';
import successIcon from '../../assets/images/icon-success-check.svg';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z.object({
	firstName: z.string().min(1, 'This field is required'),
	lastName: z.string().min(1, 'This field is required'),
	email: z.email('Please enter a valid email address'),
	message: z.string().min(10, 'This field is required'),
	consent: z.boolean().refine((val) => val === true, {
		message: 'You must consent to proceed',
	}),
	query: z.refine((val) => val === 'general' || val === 'support', {
		message: 'Please select a query type',
	}),
});

const defaultValues = {
	firstName: '',
	lastName: '',
	email: '',
	message: '',
	consent: false,
};

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: defaultValues,
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<>
			<Toast
				title={'Message Sent!!'}
				message={"Thanks for completing the form. We'll be in touch soon!"}
				icon={successIcon}
				isVisible={isSubmitSuccessful}
			/>

			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.formTitle}>Contact us</h2>

				<fieldset className={styles.fieldset}>
					<div className={styles.groupedInput}>
						<InputField
							label={'First Name'}
							id={'firstName'}
							name={'firstName'}
							register={register}
							errors={errors}
						/>
						<InputField
							label={'Last Name'}
							id={'lastName'}
							name={'lastName'}
							register={register}
							errors={errors}
						/>
					</div>
					<div className={styles.groupedInput}>
						<InputField
							label={'Email Address'}
							type="email"
							id={'email'}
							name={'email'}
							register={register}
							errors={errors}
						/>
					</div>
				</fieldset>

				<fieldset
					className={styles.fieldset}
					role="radiogroup"
					aria-invalid={!!errors.query}
					aria-describedby={errors.query ? 'query-error' : undefined}
				>
					<legend>Query type </legend>
					<div className={styles.groupedInput}>
						<InputField
							label={'General Enquiry'}
							type={'radio'}
							name={'query'}
							id={'general'}
							value={'general'}
							register={register}
							errors={errors}
							showError={false}
						/>
						<InputField
							label={'Support Request'}
							type={'radio'}
							name={'query'}
							id={'support'}
							value={'support'}
							register={register}
							errors={errors}
							showError={false}
						/>
					</div>
					{errors.query && <p className={styles.error}>{errors.query.message}</p>}
				</fieldset>

				<fieldset className={styles.fieldset}>
					<div className={styles.groupedInput}>
						<InputField
							label={'Message'}
							type={'textarea'}
							name={'message'}
							id={'message'}
							register={register}
							errors={errors}
						/>
					</div>

					<InputField
						label={'I consent to being contacted by the team'}
						type={'checkbox'}
						id={'consent'}
						name={'consent'}
						register={register}
						errors={errors}
					/>
				</fieldset>

				<Button type={'submit'}> Submit </Button>
			</form>
		</>
	);
};

export default ContactForm;
