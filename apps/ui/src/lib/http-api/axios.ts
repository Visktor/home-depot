import axios from 'axios'
import { withCatcher } from '../../utils/catcher';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
})

const httpApi = {
    get: async <T>(...rest: Parameters<typeof instance.get<T>>) => {
        const [err, res] = await withCatcher(instance.get<T>(...rest))
        if (err) {
            return { error: err.message }
        }
        return { data: res.data }
    },
    post: async <T>(...rest: Parameters<typeof instance.post<T>>) => {
        const [err, res] = await withCatcher(instance.post<T>(...rest))
        if (err) {
            return { error: err.message }
        }
        return { data: res.data }
    },
    put: async <T>(...rest: Parameters<typeof instance.put<T>>) => {
        const [err, res] = await withCatcher(instance.put<T>(...rest))
        if (err) {
            return { error: err.message }
        }
        return { data: res.data }
    },
    delete: async <T>(...rest: Parameters<typeof instance.delete<T>>) => {
        const [err, res] = await withCatcher(instance.delete<T>(...rest))
        if (err) {
            return { error: err.message }
        }
        return { data: res.data }
    },
}

export { httpApi }
