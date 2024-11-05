import React from 'react';
import ForgotPasswordForm from './component/forgotPasswordForm';

const ForgotPassword: React.FC = () => {
	return (
		<div className="forgot-password-page">
			<h1>Восстановление пароля</h1>
			<ForgotPasswordForm />
		</div>
	);
};

export default ForgotPassword;
