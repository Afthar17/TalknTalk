import React from 'react'
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Login = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'rgba(0,0,0,0.01)',
                p: 0,
                m: 0,

            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    maxWidth: 400,
                    width: '100%',
                    p: 3,
                    border: 1,
                    borderColor: 'secondary.main',
                    borderRadius: 2,
                    boxShadow: 4,
                    bgcolor: 'background.default',
                }}
            >
                <Typography
                    variant='h3'
                    sx={{
                        mb: 3,
                        color: 'secondary.main',
                        fontWeight: 'bold',
                        p: 2,
                    }}
                >
                    Login
                </Typography>

                <form>

                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                    </Box>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            py: 1.5,
                            fontWeight: 'bold',
                            backgroundColor: 'secondary.main',
                            '&:hover': {
                                backgroundColor: 'secondary.dark',
                            },
                        }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default Login