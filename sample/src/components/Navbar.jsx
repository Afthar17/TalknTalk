import React from 'react'
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <AppBar color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Home
                </Typography>

                <Tabs value={false}>
                    <Tab label="Login" onClick={() => navigate('/login')} />
                    <Tab label="SignUp" onClick={() => navigate('/signup')} />
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar