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
        password: Yup.string()
            .required('Вкажіть пароль.') 
            .min(5, 'Пароль має містить мінімум 5 символів.')
            .matches(/[a-zA-Z]/, 'Пароль має містить латинські символи.'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Не співпадають паролі')
            .required("Повтор пароля є обов'язковим"),
    });
}
export default validationFields;