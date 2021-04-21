import React from 'react';
import web from '../images/about.jpg';
import Common from './common';

export default function About() {
    return (
        <>
           <Common name = "Welcome to about page" imgsrc = {web} visit = "/contact" btname = "Contact Now"/>
        </>
    )
}

