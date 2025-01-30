import { reducer_loginForm } from '#/routes/login/form/form.state'
import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const appStateStore = configureStore({
    reducer: {
        loginForm: reducer_loginForm,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
})

type RootState = ReturnType<typeof appStateStore.getState>

type AppDispatch = typeof appStateStore.dispatch

const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export { appStateStore, useAppDispatch, type RootState, type AppDispatch }
