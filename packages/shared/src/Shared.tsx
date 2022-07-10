import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { createTheme, ThemeProvider, Box } from '@mui/material'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { firebaseConfig } from './env'
import { store, getDesignTokens, setCore } from './listingslab-shared'
import App from './App'

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth()
export const history = createBrowserHistory()

onAuthStateChanged(auth, (user) => {
    const dispatch = store.dispatch
    dispatch(setCore({ key: 'authReady', value: true }))
    if (user) {
        dispatch(setCore({ key: 'uid', value: user.uid }))
    } else {
        dispatch(setCore({ key: 'uid', value: null }))
    }
})

export default function Shared() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={createTheme(getDesignTokens('light'))}>
                    <App />
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    )
}
