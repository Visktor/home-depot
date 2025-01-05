import { createBrowserRouter } from 'react-router-dom'
import { LoginLayout } from '../../routes/login/layout'
import { LoginForm } from '../../routes/login/form/form'

const router = createBrowserRouter([
    {
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <LoginForm />,
            },
        ],
    },
])

export { router as ApplicationRouter }
