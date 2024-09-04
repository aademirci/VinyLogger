/* eslint-disable no-unused-vars */
import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()
    const [cookies, setCookie] = useCookies(['vinylogger'])

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
                        const { data } = await axios.post('http://localhost:8080/user/login', values)
                            const { token, msg } = data
                
                            if (token) {
                                alert(msg)
                                setCookie('vinylogger', token, { path: '/' })
                                navigate(`/`)
                            } else {
                                alert(msg)
                            }
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