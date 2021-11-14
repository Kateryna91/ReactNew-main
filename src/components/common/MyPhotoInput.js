import { useState } from "react";
import { useField } from 'formik';

const MyPhotoInput = ({
    myField,
    formikRef,
    ...props
}) => {

    const [photo, setPhoto] = useState("https://bytes.ua/wp-content/uploads/2017/08/no-image.png");
    const [error, setError] = useState("");
    const [field,   meta] = useField(props);

    const selectImage = (event) => {
        const files= event.currentTarget.files;
        if (!(files && files[0])) {
            setError("Оберіть файл.");
            return;
        }

        if (!files[0].type.match(/^image\//)) {
            setError("Оберіть фото.");
            return;
        }

        if (((files[0].size / 1024) / 1024) >10) {
            setError("Файл не може бути більше 10 Мб.");
            return;
        }
        setPhoto(URL.createObjectURL(files[0]));
        formikRef.current.setFieldValue(myField, files[0]);
        setError("");
    }

    return (
        <div className="mb-3">
            <label htmlFor={myField}>
                <img
                    src={photo}
                    width="150"
                    alt="user img"
                />
            </label>
            <input type="file"
                style={{display:"none"}}
                className="form-control"
                id={myField}
                onChange = {selectImage}
                 />

        {error && <span className="text-danger">{error}</span>}

        {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
            
        </div>
    );
};
export default MyPhotoInput;