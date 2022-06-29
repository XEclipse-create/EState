import React from 'react'
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';
const Layout = ({children}) => {
    return (
    <>
    <Head>
        <title>E-State</title>
    </Head>

    <Box maxWidth="1920px" m="auto" color="#1A202C">
        <header>
            <Navbar/>
        </header>
        <main>{children}</main>
        <footer>
            <Footer/>
        </footer>
    </Box>

    </>
    )
}

export default Layout