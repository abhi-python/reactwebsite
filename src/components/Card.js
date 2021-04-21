import React from 'react';
import {NavLink} from 'react-router-dom';
import Box from './Layout/Box';
import styled from 'styled-components';

export default function Card(props) {
    return (
        <>
            <CardContainer className = "col-md-4 col-10 mx-auto">
                <CardBox className="card" display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                    <CardInnerBox display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <Img src={props.imgsrc} alt={props.imgsrc}/>
                    </CardInnerBox>
                        <Box className="card-body">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                        </Box>
                </CardBox>
            </CardContainer>
        </>
    )
}
 const CardContainer = styled(Box)`
  display: flex;
  box-shadow : 0 13px 10px -7px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.24, 0.89, 0, 1);
  &:hover{
    transform: scale(1.002);
    box-shadow : 0 30px 18px -8px rgba(0, 0, 0, 0.5);
  }
 `;

 const CardBox = styled(Box)`
 
 `;

 const CardInnerBox = styled(Box)`
   min-height:270px;
   max-height:270px;    
 `;
 const Img = styled.img`
  object-fit: cover;
  height: 100%;
 `;
 