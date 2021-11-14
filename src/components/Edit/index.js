import React, {useRef, useState, useEffect} from 'react'
import validationFields from './validation';
import { Formik, Form} from 'formik';
import MyTextInput from '../common/MyTextInput';
import MyPhotoInput from '../common/MyPhotoInput';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

const EditPage = () => {

    const initState = {
        email: '',
        fio: ''
    };

    const { id } = useParams();
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
    }

    useEffect(() => {
        try {
            
        }
        catch(error) {
            console.log("Server error global");
        }
    }, []);


    return (
        <div className="row">
            <h1 ref={titleRef} className="text-center">Редагувати користувача</h1>

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

                        <button type="submit" className="btn btn-success">Реєстрація</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default EditPage;