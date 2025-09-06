import styles from './ContactForm.module.css';
import Button from '../Button/Button';
import InputField from '../InputField/InputField';
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
});

const defaultvalue = {
	firstName: '',
	lastName: '',
	email: '',
	general: false,
	support: false,
	message: '',
	consent: false,
};

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(formSchema),
		defaultvalue: defaultvalue,
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<h2 className={styles.formTitle}>Contact us</h2>
			<fieldset className={styles.fieldset}>
				<div className={styles.groupedInput}>
					<InputField
						label={'First Name *'}
						id={'firstName'}
						register={register}
						errors={errors}
					/>
					<InputField
						label={'Last Name *'}
						id={'lastName'}
						register={register}
						errors={errors}
					/>
				</div>
				<div className={styles.groupedInput}>
					<InputField
						label={'Email Address *'}
						id={'email'}
						register={register}
						errors={errors}
					/>
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
						register={register}
						errors={errors}
					/>
					<InputField
						label={'Support Request'}
						type={'radio'}
						name={'query'}
						id={'support'}
						register={register}
						errors={errors}
					/>
				</div>
			</fieldset>
			<fieldset className={styles.fieldset}>
				<div className={styles.groupedInput}>
					<InputField
						label={'Message *'}
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
					register={register}
					errors={errors}
				/>
			</fieldset>
			<Button type={'submit'}> Submit </Button>
		</form>
	);
};

export default ContactForm;
