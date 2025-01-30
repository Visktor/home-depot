import { LoginForm } from '#/routes/login/form/form'
import { LoginLayout } from '#/routes/login/layout'
import { createBrowserRouter } from 'react-router-dom'

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
