import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { createTheme, ThemeProvider, Box } from '@mui/material'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { firebaseConfig } from './env'
import {
    store,
    getDesignTokens,
    App,
    Renderer,
    Notification,
    setPersona,
    setCore,
} from './listingslab-shared'

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
export const history = createBrowserHistory()

onAuthStateChanged(auth, (user) => {
    const dispatch = store.dispatch
    dispatch(setCore({ key: 'authReady', value: true }))
    if (user) {
        const uid = user.uid
        const newUser = { uid }
        dispatch(setPersona({ key: 'user', value: newUser }))
    } else {
        const newUser = { uid: null }
        dispatch(setPersona({ key: 'user', value: newUser }))
    }
})

export default function Shared() {
    const darkLight = 'light'
    const themeMode = createTheme(getDesignTokens(darkLight))
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={themeMode}>
                    <Renderer />
                    <Notification />
                    <App />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    )
}
