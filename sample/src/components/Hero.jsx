import React from 'react'
import { Container, Typography, Box, TextField, Button } from '@mui/material'
import hero from '../assets/hero.jpg'

const Hero = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: '100vh',
                maxHeight: '400px',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'left',
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: 'white',
                p: 10,
                margin: 0,
            }}
        >

            <Box sx={{
                maxWidth: '800px',
                padding: '20px',
                borderRadius: '10px'
            }}>
                <Typography variant="h2" fontWeight="bold" mb={2}>
                    This is a sample project
                </Typography>
                <Typography variant="h6" mb={3}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                </Typography>
                <Button variant="contained" color="secondary" href="/signup"
                    sx={{
                        fontSize: 10,
                        width: 200,
                        height: 50
                    }}
                >
                    Get Started
                </Button>
            </Box>
        </Box>
    )
}

export default Hero