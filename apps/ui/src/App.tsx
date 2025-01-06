import { RouterProvider } from 'react-router-dom'
import { ApplicationRouter } from './lib/router/router'
import { NextUIProvider } from '@nextui-org/react'
import { Provider as ReduxProvider } from 'react-redux'
import { appStateStore } from './lib/state/store'

function App() {
    return (
        <NextUIProvider>
            <ReduxProvider store={appStateStore}>
                <RouterProvider router={ApplicationRouter} />
            </ReduxProvider>
        </NextUIProvider>
    )
}

export default App
