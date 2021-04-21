import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Box from './Layout/Box';

export default function Common(props) {
    return (
        <>
            <Box id = "header" className = "d-flex align-items-center" flex = {1}>
                <Box className = "container">
                    <Box className = "row">
                        <Box className = "col-10 mx-auto col-12">
                            <Box className = "row">
                                <Box color={'black'} display={'flex'} show={true} justifyContent={'center'} flexDirection={'column'} className = "col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                                    <h1>
                                        {props.name} <strong className = "brand-name">Design Divine</strong>
                                    </h1>
                                    <h2 className = "my-3">
                                        We are the team of partners to make website that take your business at top
                                    </h2>
                                    <Box className = "mt-3">
                                        <NavLink to = {props.visit} className = "btn-get-started">{props.btname}</NavLink>
                                    </Box>
                                </Box>
                                <ImageBox className = "col-md-6 order-1 order-lg-2 header-img">
                                    <img src = {props.imgsrc} className = "img-fluid animated" alt = "home img"/>
                                </ImageBox> 
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

const ImageBox = styled(Box)`
    padding: 20px 10px;
`;