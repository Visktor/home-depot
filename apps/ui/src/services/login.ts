import { createAsyncThunk } from '@reduxjs/toolkit'
import { getServiceStatus } from './utils'
import { TSCHEMAS } from '#/lib/schema/global'
import { httpApi } from '#/lib/http-api/axios'

const services = {
    login: createAsyncThunk('login', async (data: TSCHEMAS['login_form']) =>
        httpApi.post<{ data: string }>('/login', data),
    ),

    recover_password: createAsyncThunk('recover_password', async () => {}),

    reset_password: createAsyncThunk('reset_password', async () => {}),
}

const statuses = getServiceStatus(services)

export default { ...services, statuses: statuses }
