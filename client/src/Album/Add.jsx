import { ErrorMessage, Field, Form, Formik } from 'formik'

const Add = () => {
    return (
        <div className="add-album">
            <Formik 
                initialValues={{ place: 'collection', artist: '', title: '', year: '', genre: '' }}
                validate={values => {
                    const errors = {}
                    if (!values.artist) errors.artist = '* Required'
                    if (!values.title) errors.title = '* Required'
                    if (!values.year) errors.year = '* Required'
                    else if (!/^(?:19|20)\d{2}$/i.test(values.year)) errors.year = '* Invalid year'
                    if (!values.genre) errors.genre = '* Required'
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
                        <span role='group' className='radio'>
                            <label>
                                <Field type="radio" name="place" value="collection" />
                                Collection
                            </label>
                            <label>
                                <Field type="radio" name="place" value="wishlist" />
                                Wishlist
                            </label>
                        </span>
                        <span>
                            <label htmlFor="artist">Artist:</label>
                            <Field type="text" name="artist" />
                            <ErrorMessage name="artist" component="div" className="error" />
                        </span>
                        <span>
                            <label htmlFor="title">Title:</label>
                            <Field type="text" name="title" />
                            <ErrorMessage name="title" component="div" className="error" />
                        </span>
                        <div>
                            <span className="year">
                                <label htmlFor="year">Year:</label>
                                <Field type="text" maxlength="4" name="year" />
                            </span>
                            <span className="genre">
                                <label htmlFor="genre">Genre:</label>
                                <Field type="text" name="genre" />
                            </span>
                        </div>
                        <ErrorMessage name="year" component="div" className="error" />
                        <ErrorMessage name="genre" component="div" className="error" />
                        <button type="submit" disabled={isSubmitting}>Add album</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Add