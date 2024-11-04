import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Имя обязательно'),
  email: Yup.string().email('Неверный формат email').required('Email обязателен'),
  password: Yup.string()
    .min(5, 'Пароль должен быть не менее 5 символов')
    .required('Пароль обязателен'),
});

const RegisterForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Форма отправлена:', values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="registration-form">
          <div>
            <label htmlFor="name">Имя</label>
            <Field type="text" name="name" placeholder="Иван Иванов"/>
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="ivan@example.com" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
          
          <div>
            <label htmlFor="password">Пароль</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>

          <div className="forgot-password-link">
            <Link to="/forgot-password">Забыли пароль?</Link>
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            Зарегистрироваться
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
