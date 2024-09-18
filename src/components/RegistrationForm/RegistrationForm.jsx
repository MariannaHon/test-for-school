


// import { useDispatch } from 'react-redux';
// import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
    // const dispatch = useDispatch();

    const Validator = Yup.object().shape({
        name: Yup.string().min(2, "Too Short!").max(15, "Too Long!").required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        date: Yup.number().required("Required"),
    })

    const initialValues = {
        name: '',
        email: '',
        date: '',
    }

    const handleSubmit = (values, actions) => {
        // dispatch(register(values));
        actions.resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Validator}
            onSubmit={handleSubmit}>
            <Form className={css.form}>
                <label className={css.label}>
                    Full name
                    <Field className={css.input} type="text" name="name" />
                    <ErrorMessage className={css.error} name="name" component="div" />
                </label>
                <label className={css.label}>
                    Email
                    <Field className={css.input} type="email" name="email" />
                    <ErrorMessage className={css.error} name="email" component="div" />
                </label>
                <label className={css.label}>
                    Date of birth
                    <Field className={css.input} type="password" name="password" />
                    <ErrorMessage className={css.error} name="password" component="div" />
                </label>
                <div>
                    <label className={css.radioLabel}>
                        <input
                            className={css.radio}
                            type="radio"
                            value="media"
                        />
                        <span className={css.checkmark}></span>
                        Social media
                    </label>
                    <label className={css.radioLabel}>
                        <input
                            className={css.radio}
                            type="radio"
                            value="friends"
                        />
                        <span className={css.checkmark}></span>
                        Friends
                    </label>
                    <label className={css.radioLabel}>
                        <input
                            className={css.radio}
                            type="radio"
                            value="myself"
                        />
                        <span className={css.checkmark}></span>
                        Found Myself
                    </label>
                </div>
                <button className={css.btn} type="submit">Register</button>
            </Form>
        </Formik>
    );
}
