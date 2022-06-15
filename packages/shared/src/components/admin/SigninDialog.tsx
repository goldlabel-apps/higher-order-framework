import * as React from 'react'
import {
    Alert,
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Grid,
    IconButton,
    OutlinedInputProps,
    TextFieldProps,
    TextField,
    alpha,
    styled,
    useTheme,
    useMediaQuery,
    Typography,
} from '@mui/material'
import {
    useAppSelector,
    useAppDispatch,
    selectCore,
    Icon,
    setCore,
    signIn,
} from '../../listingslab-shared'

const NiceText = styled((props: TextFieldProps) => (
    <TextField
        InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
}))

export default function SigninDialog() {
    const id = 'dialogSignin'
    const core = useAppSelector(selectCore)
    const { dialogSigninOpen } = core.data
    const { error } = core.data
    let alertObj = null
    if (error) {
        alertObj = { severity: 'warning', message: error }
    }
    const dispatch = useAppDispatch()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [passwordHelper, setPasswordHelper] = React.useState(null)
    const [passwordValid, setPasswordValid] = React.useState(true)
    const [emailHelper, setEmailHelper] = React.useState(null)
    const [emailValid, setEmailValid] = React.useState(true)

    const handleClose = () => {
        dispatch(setCore({ key: 'dialogSigninOpen', value: false }))
    }

    const handleSignin = () => {
        // @ts-ignore
        const email = document.getElementById('email').value
        // @ts-ignore
        const password = document.getElementById('password').value

        if (email.length < 5) {
            setEmailValid(false)
            setEmailHelper('Email is not valid')
        } else {
            setEmailValid(true)
            setEmailHelper(null)
        }
        if (password.length < 4) {
            setPasswordValid(false)
            setPasswordHelper('Password must be more than 4 characters')
        } else {
            setPasswordValid(true)
            setPasswordHelper(null)
        }
        if (setEmailValid && setPasswordValid) {
            dispatch(signIn(email, password))
        }
    }

    return (
        <Dialog
            open={dialogSigninOpen}
            id={id}
            fullScreen={isMobile}
            onClose={handleClose}
            fullWidth
            maxWidth="xs"
        >
            <DialogTitle>
                <Grid container>
                    <Grid item sx={{ flexGrow: 1 }} />
                    <Grid item>
                        <IconButton onClick={handleClose}>
                            <Icon icon="close" />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>

            <DialogContent>
                {
                    // @ts-ignore
                    alertObj ? (
                        <Alert severity={alertObj.severity}>
                            {alertObj.message}
                        </Alert>
                    ) : null
                }

                <NiceText
                    id="email"
                    label="Email"
                    fullWidth
                    error={!emailValid}
                    helperText={emailHelper}
                    variant="filled"
                    style={{ marginTop: 11 }}
                />

                <NiceText
                    id="password"
                    type="password"
                    label="Password"
                    error={!passwordValid}
                    helperText={passwordHelper}
                    fullWidth
                    variant="filled"
                    style={{ marginTop: 11 }}
                />
            </DialogContent>

            <DialogActions>
                <Button sx={{ mb: 1, mr: 2 }} onClick={handleSignin}>
                    <span style={{ marginRight: 4, marginLeft: 4 }}>
                        Sign in
                    </span>
                    <Icon icon="arrowr" />
                </Button>
            </DialogActions>
        </Dialog>
    )
}

/*
<pre>authDialogOpen {JSON.stringify(authDialogOpen, null, 2)}</pre>
*/
