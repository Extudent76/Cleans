import React from 'react';
import RegisterForm from './component/registerForm'

const Register: React.FC = () => {
  return (
    <div className="register-page">
      <h1>Регистрация</h1>
      <RegisterForm/>
    </div>
  );
};

export default Register;