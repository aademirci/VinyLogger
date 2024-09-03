import {ErrorMessage, Field, Form, Formik} from 'formik'

const SignIn = () => {
    return (
        <div className="sign-in">
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={values => {
                    const errors = {}
                    if (!values.username) errors.username = '* Required'
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
                            <label htmlFor="password">Password:</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </span>
                        <button type="submit" disabled={isSubmitting}>Sign in</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignIn