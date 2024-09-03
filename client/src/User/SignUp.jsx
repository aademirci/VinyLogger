import { ErrorMessage, Field, Form, Formik } from 'formik'

const SignUp = () => {
    return (
        <div className="sign-up">
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
                validate={values => {
                    const errors = {}
                    if (!values.username) errors.username = '* Required'
                    if (!values.email) errors.email = '* Required'
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = '* Invalid email address'
                    if (!values.password) errors.password = '* Required'
                    return errors
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        setSubmitting(false)
                    } catch (error) {
                        console.log(error)
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <span>
                            <label htmlFor="username">Username:</label>
                            <Field type="text" name="username" />
                            <ErrorMessage name="username" component="div" className="error" />
                        </span>
                        <span>
                            <label htmlFor="email">Email:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </span>
                        <span>
                            <label htmlFor="password">Password:</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </span>
                        <button type="submit" disabled={isSubmitting}>Sign up</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUp