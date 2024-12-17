import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useStore } from "../store";

const validationSchema = Yup.object({
  name: Yup.string().required("Имя обязательно"),
  email: Yup.string()
    .email("Неверный формат email")
    .required("Email обязателен"),
  password: Yup.string()
    .min(5, "Пароль должен быть не менее 5 символов")
    .required("Пароль обязателен"),
});

const RegisterForm: React.FC = () => {
  const login = useStore((state) => state.logIn);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setTimeout(() => {
          login(values);
          navigate("/");
        }, 200);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="registration-form">
          <div>
            <label htmlFor="name">Имя</label>
            <Field type="text" name="name" placeholder="Иван Иванов" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="ivan@example.com" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <label htmlFor="password">Пароль</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <div>
            <label>
              Ваша рефералка OlimpBet
              <input type="text" disabled value={"ZXhkSGHnx_Sdhjgsa62"} />
            </label>
          </div>

          <div className="forgot-password-link">
            <Link to="/forgot-password">Может забыли пароль?</Link>
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
