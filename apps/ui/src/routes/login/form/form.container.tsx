import { useSelector } from 'react-redux'
import { sliceLoginForm } from './form.state'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SERVICES } from '#/services/main'
import { SCHEMAS, TSCHEMAS } from '#/lib/schema/global'
import { useAppDispatch } from '#/lib/state/store'

function useLoginForm() {
    const { isLoading, isPasswordVisible } = useSelector(
        sliceLoginForm.selectSlice,
    )

    const dispatch = useAppDispatch()

    const form = useForm({
        defaultValues: SCHEMAS.login.getDefault(),
        resolver: yupResolver(SCHEMAS.login),
    })

    const onSubmit = (data: TSCHEMAS['login']) => {
        dispatch(SERVICES.login.login(data))
    }

    return { isLoading, form, onSubmit, isPasswordVisible }
}

export { useLoginForm }
