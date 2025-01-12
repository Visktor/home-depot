import { reducer_loginForm } from '#/routes/login/form/form.state'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const appStateStore = configureStore({
    reducer: {
        loginForm: reducer_loginForm,
    },
})

export type RootState = ReturnType<typeof appStateStore.getState>

export type AppDispatch = typeof appStateStore.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export { appStateStore }
