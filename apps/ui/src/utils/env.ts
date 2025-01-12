import y from 'yup'

const appEnvSchema = y.object({
    MODE: y.string().oneOf(['development', 'production']).required(),
    BASE_URL: y.string().required(),
    PROD: y.boolean().required(),
    SSR: y.boolean().required(),
    HOME_DEPOT_API_URL: y.string().required(),
})

const appEnv = appEnvSchema.validateSync(import.meta.env)

export { appEnv }
