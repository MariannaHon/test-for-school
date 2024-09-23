


import { useDispatch } from 'react-redux';
import { addParticipant } from '../../redux/participants/operations.js';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';

import { useLocation } from "react-router-dom"

export default function RegistrationForm() {

    const location = useLocation();
    const eventId = location.state?.eventId;

    const dispatch = useDispatch();

    const Validator = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(30, "Too Long!").required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
        dateOfBirth: Yup.string().required("Required"),
    })

    const initialValues = {
        name: '',
        email: '',
        dateOfBirth: '',
    }

    const handleSubmit = (values, actions) => {
        dispatch(addParticipant({ ...values, eventId }));
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
                    <Field className={css.input} type="text" name="dateOfBirth" />
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
