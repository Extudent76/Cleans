import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const emailValidationSchema = Yup.object({
	email: Yup.string()
		.email('Неверный формат email')
		.required('Email обязателен'),
});

const passwordValidationSchema = Yup.object({
	password: Yup.string()
		.min(5, 'Пароль должен быть не менее 5 символов')
		.required('Пароль обязателен'),
});

const ForgotPasswordForm: React.FC = () => {
	const [emailSubmitted, setEmailSubmitted] = React.useState(false);

	function submitEmail() {
		setEmailSubmitted(true);
	}
	return (
		<>
			{!emailSubmitted ? (
				<Formik
					initialValues={{ email: '' }}
					validationSchema={emailValidationSchema}
					onSubmit={submitEmail}
				>
					{({ isSubmitting }) => (
						<Form className="registration-form">
							<div>
								<label htmlFor="email">Email</label>
								<Field
									type="email"
									name="email"
									placeholder="ivan@example.com"
								/>
								<ErrorMessage
									name="email"
									component="div"
									className="error-message"
								/>
							</div>

							<button type="submit" disabled={isSubmitting}>
								Подтвердить почту
							</button>
						</Form>
					)}
				</Formik>
			) : (
				<Formik
					initialValues={{ password: '' }}
					validationSchema={passwordValidationSchema}
					onSubmit={(values) => {
						console.log('Форма отправлена:', values);
					}}
				>
					{({ isSubmitting }) => (
						<Form className="registration-form">
							<div>
								<label htmlFor="password">Новый пароль</label>
								<Field type="password" name="password" />
								<ErrorMessage
									name="password"
									component="div"
									className="error-message"
								/>
							</div>

							<button type="submit" disabled={isSubmitting}>
								Подтвердить
							</button>
						</Form>
					)}
				</Formik>
			)}
		</>
	);
};

export default ForgotPasswordForm;
