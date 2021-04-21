import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <>
            <div className = "w-100 text-center">
                <Paragraph>&copy; Design Divine. All Rights Reserved | Terms and Conditions</Paragraph>
            </div>
        </>
    )
}
const Paragraph = styled.p`
    padding: 2rem 0 2rem;
    margin-bottom: 0;
`;