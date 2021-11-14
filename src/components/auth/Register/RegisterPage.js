import React, {useRef, useState} from 'react'
import validationFields from './validation';
import { Formik, Form} from 'formik';
import MyTextInput from '../../common/MyTextInput';
import MyPhotoInput from '../../common/MyPhotoInput';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { RegisterUser } from '../../../actions/auth';

const RegisterPage = () => {

    const initState = {
        email: '',
        password: '',
        confirmPassword: '',
        fio: '',
        photo: null
    };

    const formikRef = useRef();
    const titleRef = useRef();
    const [invalid, setInvalid] = useState([]);
    const history = useHistory();

    const dispatch = useDispatch();

    const onSubmitHandler = (values) => {

        //Робимо форму, у якій можна відправити файл
        const formData = new FormData();
        //formData.append("email", values.email);
        //у форічі біжимо по initState і передаємо дані в форму 
        //key - email, value-ff@dd.dd
        Object.entries(values).forEach(([key, value]) => formData.append(key, value));

        dispatch(RegisterUser(formData))
            .then(result => {
                history.push("/");
            })
            .catch(ex => {
                const {errors} = ex;
                Object.entries(errors).forEach(([key, values]) => {
                    let message = '';
                    values.forEach(text => message += text + " ");
                    formikRef.current.setFieldError(key, message);
                });

                setInvalid(errors.invalid);
                titleRef.current.scrollIntoView({ behavior: 'smooth' })
            });
    }


    return (
        <div className="row">
            <h1 ref={titleRef} className="text-center">Реєстрація</h1>

            {
                invalid && invalid.length > 0 &&
                <div className="alert alert-danger">
                    <ul>
                        {
                            invalid.map((text, index) => {
                                return (
                                    <li key={index}>{text}</li>

                                );
                            })
                        }
                    </ul>
                </div>

            }

            <div className="offset-md-3 col-md-6">
                <Formik
                    innerRef={formikRef}
                    initialValues={initState}
                    onSubmit={onSubmitHandler}
                    validationSchema={validationFields()}>
                    <Form>
                        <MyTextInput
                            label="ПІБ"
                            name="fio"
                            id="fio"
                            type="text"
                        />

                        <MyTextInput
                            label="Електронна пошта"
                            name="email"
                            id="email"
                            type="text"
                        />

                        <MyPhotoInput
                            myField="photo"
                            name="photo"
                            id="photo"
                            formikRef={formikRef}
                        />

                        <MyTextInput
                            label="Пароль"
                            name="password"
                            id="password"
                            type="password"
                        />
                        <MyTextInput
                            label="Повтор пароль"
                            name="confirmPassword"
                            id="confirmPassword"
                            type="password"
                        />


                        <button type="submit" className="btn btn-success">Реєстрація</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default RegisterPage;