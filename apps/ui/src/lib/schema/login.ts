import * as yup from 'yup'
import { schemaUtils } from './utils'

const schemaLoginForm = yup.object({
    email: schemaUtils.requiredString(),
    password: yup.string().required('Password is required').default(''),
})

const defaultValues = schemaLoginForm.getDefault()

export { schemaLoginForm, defaultValues as defaulsLoginForm }
