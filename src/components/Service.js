import React from 'react';
import Card from './Card';
import Box from './Layout/Box';
import Sdata from './Sdata';

export default function Service() {
    return (
        <>
            <Box className = "my-5">
                <h1 className = "text-center">Our Services</h1>
            </Box>

            <Box className = "container mb-5">
                <Box className = "row">
                    <Box className = "col-10 mx-auto col-12">
                        <Box className = "row gy-4">
                            {
                                Sdata.map((val, index) =>{
                                    return <Card
                                                key = {index}
                                                imgsrc = {val.imgsrc}
                                                title = {val.title}
                                            />
                                })
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
