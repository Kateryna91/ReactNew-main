import * as Yup from 'yup';

const validationFields= () => {
    return Yup.object({
        email: Yup.string()
            .email('Не коректно вказана пошта')
            .required("Вкажіть пошту"),
        fio: Yup.string()
            .required("Вкажіть ПІБ"),
        photo: Yup.mixed()
            .required("Вкажіть фото"),
      
    });
}
export default validationFields;