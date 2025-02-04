import axios from 'axios'
import { withCatcher } from '../../utils/catcher'
import { appEnv } from '#/utils/env'

const instance = axios.create({
    baseURL: appEnv.VITE_HOME_DEPOT_API_URL,
})

const homeDepotApi = {
    get: async <T = Record<any, any>>(
        ...rest: Parameters<typeof instance.get<T>>
    ) => {
        const [err, response] = await withCatcher(instance.get<T>(...rest), [
            axios.AxiosError<{ message: string }>,
        ])

        return [err?.response?.data, response?.data] as
            | [{ message: string }, undefined]
            | [undefined, T]
    },

    post: async <T = Record<any, any>>(
        ...rest: Parameters<typeof instance.post<T>>
    ) => {
        const [err, response] = await withCatcher(instance.post<T>(...rest), [
            axios.AxiosError<{ message: string }>,
        ])

        return [err?.response?.data, response?.data] as
            | [{ message: string }, undefined]
            | [undefined, T]
    },

    put: async <T = Record<any, any>>(
        ...rest: Parameters<typeof instance.put<T>>
    ) => {
        const [err, response] = await withCatcher(instance.put<T>(...rest), [
            axios.AxiosError<{ message: string }>,
        ])

        return [err?.response?.data, response?.data] as
            | [{ message: string }, undefined]
            | [undefined, T]
    },

    delete: async <T = Record<any, any>>(
        ...rest: Parameters<typeof instance.delete<T>>
    ) => {
        const [err, response] = await withCatcher(instance.delete<T>(...rest), [
            axios.AxiosError<{ message: string }>,
        ])

        return [err?.response?.data, response?.data] as
            | [{ message: string }, undefined]
            | [undefined, T]
    },
}

export { homeDepotApi as httpApi }
