import { useSelector } from 'react-redux'
import { sliceLoginForm, setPasswordVisibility, reset } from './form.state'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SERVICES } from '#/services/main'
import { SCHEMAS, TSCHEMAS } from '#/lib/schema/global'
import { useAppDispatch } from '#/lib/state/store'
import { useEffect } from 'react'
import { useAsyncDispatch } from '#/hooks/useAsyncDispatch'

function useLoginForm() {
    const { isLoading, isPasswordVisible } = useSelector(
        sliceLoginForm.selectSlice,
    )

    const dispatch = useAppDispatch()
    const asyncDispatch = useAsyncDispatch()

    const form = useForm({
        defaultValues: SCHEMAS.login_form.getDefault(),
        resolver: yupResolver(SCHEMAS.login_form),
    })

    const onSubmit = async (data: TSCHEMAS['login_form']) => {
        const [error, response] = await asyncDispatch(
            SERVICES.login.login(data),
        )

        if (error) {
            return
        }

        console.log(response.data)
    }

    useEffect(
        () => () => {
            dispatch(reset())
        },
        [dispatch],
    )

    return {
        isLoading,
        form,
        onSubmit,
        isPasswordVisible,
        onEyeIconClick: () => dispatch(setPasswordVisibility()),
    }
}

export { useLoginForm }
