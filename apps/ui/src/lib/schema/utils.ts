import * as yup from 'yup'

const schemaUtils = {
    requiredString: (opts?: { default?: string }) =>
        yup
            .string()
            .min(1)
            .required()
            .default(opts?.default ?? ''),
    requiredNumber: (opts?: { default?: number }) =>
        yup
            .number()
            .min(1)
            .required()
            .default(opts?.default ?? 0),
}

export { schemaUtils }
