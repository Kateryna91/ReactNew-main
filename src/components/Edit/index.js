import React, {useRef, useState, useEffect} from 'react'
import validationFields from './validation';
import { Formik, Form} from 'formik';
import MyTextInput from '../common/MyTextInput';
import MyPhotoInput from '../common/MyPhotoInput';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import UsersService from '../../services/users.service';
import EclipseWidget from '../common/eclipse';

const EditPage = () => {

    const initState = {
        email: '',
        fio: ''
    };

    const { id } = useParams();
    const formikRef = useRef();
    const titleRef = useRef();
    const [invalid, setInvalid] = useState([]);
    const [imagePath, setImagePath] = useState("");
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    const dispatch = useDispatch();

    const onSubmitHandler = (values) => {
        console.log("values", values)
         const formData = new FormData();
         Object.entries(values).forEach(([key, value]) => formData.append(key, value));
   UsersService.save(formData)
   .then(res => history.push("/"));
        }

    useEffect(() => {
        try {
            console.log("id = ", id);
            UsersService.edit(id)
                .then(res => {
                    const {data} = res;
                    formikRef.current.setFieldValue("id", data.id);
                    formikRef.current.setFieldValue("fio", data.fio);
                    formikRef.current.setFieldValue("email", data.email);
                    setImagePath("http://localhost:15247"+data.image);
                    setLoading(false);
                });
            
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
                           
                            name="id"
                            type="hidden"
                            value = {id}

                        />
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

                        {imagePath &&
                            <MyPhotoInput
                                myField="photo"
                                name="photo"
                                id="photo"
                                data={imagePath}
                                formikRef={formikRef}
                            />
                        }
                        

                        <button type="submit" className="btn btn-success">Змінити</button>
                    </Form>
                </Formik>
            </div>
            {loading && <EclipseWidget/> }
        </div>
    );
}

export default EditPage;