import { createAsyncThunk } from '@reduxjs/toolkit'
import { getServiceStatus } from './utils'
import { TSCHEMAS } from '#/lib/schema/global'

const service_login = {
    login: createAsyncThunk('login', async (data: TSCHEMAS['login']) => {
        await new Promise(resolve => setTimeout(resolve, 5000))
        return { data: data }
    }),

    recover_password: createAsyncThunk('recover_password', async () => {}),

    reset_password: createAsyncThunk('reset_password', async () => {}),
}

const service_status_login = getServiceStatus(service_login)

export { service_login, service_status_login }
