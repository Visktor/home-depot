import { loginFormSchema } from '#/routes/login/form/form.schema'
import { InferType } from 'yup'

const SCHEMAS = {
    login_form: loginFormSchema,
}

type TSCHEMAS = { [key in keyof typeof SCHEMAS]: InferType<typeof SCHEMAS[key]> }

export { SCHEMAS, type TSCHEMAS }
