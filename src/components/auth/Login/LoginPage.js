import React, { useState } from 'react'
import validationFields from './validation';
import { Formik, Form } from 'formik';
import MyTextInput from '../../common/MyTextInput';
import { LoginUser } from '../../../actions/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


const LoginPage = () => {

    const initState = {
        email: '',
        password: ''
    };

     const dispatch = useDispatch();
     const [invalid, setInvalid] = useState([]);
     const history = useHistory();

    const onSubmitHandler = (values) => {
      dispatch(LoginUser(values))
      .then(result => {
          history.push("/");

      })
      .catch (ex => {
          setInvalid(ex.errors.invalid);
      })
    }


    return (
        <div className="row">
            <h1 className="text-center">Вхід</h1>
            <div className="offset-md-3 col-md-6">
                <Formik
                    initialValues={initState}
                    onSubmit={onSubmitHandler}
                    validationSchema={validationFields()}>
                    <Form>

                        <MyTextInput
                            label="Електронна пошта"
                            name="email"
                            id="email"
                            type="text"
                        />
                        <MyTextInput
                            label="Пароль"
                            name="password"
                            id="password"
                            type="password"
                        />

                        <button type="submit" className="btn btn-success">Логін</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default LoginPage;