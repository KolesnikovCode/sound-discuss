import React from 'react'
import { useFormik } from 'formik';

const Form: React.FC = () => {

    const initialValues = React.useMemo(() => {
        return {
            name: '',
            description: ''
        }
    }, []);

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log(values);
        }
    });

    return (
        <form onSubmit={ formik.handleSubmit } className="upload-form">
            <input
                placeholder="Project name"
                name="name"
                type="text"
                onChange={ formik.handleChange }
                value={ formik.values.name }
            />
            <input
                placeholder="Project description"
                name="description"
                type="text"
                onChange={ formik.handleChange }
                value={ formik.values.description }
            />
            <button type="submit" disabled>Send</button>
        </form>
    )
};

export default Form;
