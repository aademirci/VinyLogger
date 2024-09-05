import axios from "axios"
import { ErrorMessage, Field, Form, Formik } from "formik"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const SignUp = () => {
  const navigate = useNavigate()

  return (
    <div className="sign-up">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validate={(values) => {
          const errors = {}
          if (!values.username) errors.username = "* Required"
          if (!values.email) errors.email = "* Required"
          else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          )
            errors.email = "* Invalid email address"
          if (!values.password) errors.password = "* Required"
          return errors
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            setSubmitting(false)
            const { data } = await axios.post(
              "http://localhost:8080/user/register",
              { ...values }
            )

            const { newUser, msg } = data

            if (newUser) {
              setTimeout(() => {
                navigate("/") // Navigate after a short delay
              }, 5000)
              toast.success(msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
            } else {
              toast.error(msg, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
            }
          } catch (error) {
            console.log(error)
            toast.error("An error occurred during registration")
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
            <button type="submit" disabled={isSubmitting}>
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignUp
