import { schemaUtils } from '#/lib/schema/utils'
import * as yup from 'yup'

const loginFormSchema = yup.object({
    email: schemaUtils.requiredString().label('Email'),
    password: schemaUtils.requiredString().label('Password'),
})

const schema_login_form_defaults = loginFormSchema.getDefault()

export { loginFormSchema, schema_login_form_defaults }
