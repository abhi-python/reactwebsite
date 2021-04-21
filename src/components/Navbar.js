import React,{useEffect, useRef, useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Box from './Layout/Box';
export default function Navbar() {
    const wrapperRef = useRef(null);
    const [MenuIsOpen, setMenuIsOpen] = useState(false);
    function ToggleOpen(){
        setMenuIsOpen(!MenuIsOpen);
    }
    const HandleClick =(ref,setMenuIsOpen) => {
        useEffect(() =>{
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setMenuIsOpen(false);
                }
            }
    
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            }
        },[ref, setMenuIsOpen])
    }
    HandleClick(wrapperRef,setMenuIsOpen);
    return (
        <>
            <Box className = "container-fluid nav-bg">
                <Box className = "row">
                    <Box className = "col-10 mx-auto" width='100%'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                                <Box className="container" position={'relative'}>
                                    <NavLink className="navbar-brand" to="/">Design Divine</NavLink>
                                    <Ul ref={wrapperRef} className="navbar-nav ml-auto mb-2 mb-lg-0" MenuIsOpen={MenuIsOpen}>
                                            <Li className="nav-item">
                                                <NavLink className="nav-link" activeClassName = "menu-active" to="/home">Home</NavLink>
                                            </Li>
                                            <Li className="nav-item">
                                                <NavLink className="nav-link" activeClassName = "menu-active" to="/service">Services</NavLink>
                                            </Li>
                                            <Li className="nav-item">
                                                <NavLink className="nav-link" activeClassName = "menu-active" to="/about">About</NavLink>
                                            </Li>
                                            <Li className="nav-item">
                                                <NavLink className="nav-link" activeClassName = "menu-active" to="/contact">Contact</NavLink>
                                            </Li> 
                                        </Ul>
                                    <MenuBox onClick={ToggleOpen} MenuIsOpen={MenuIsOpen}>
                                        <Lines></Lines>
                                        <Lines></Lines>
                                        <Lines></Lines>
                                    </MenuBox>
                                </Box>
                        </nav> 
                    </Box>
                 </Box>
            </Box>
        </>
    )
}
const Li = styled.li`
    .nav-link{
        padding:8px !important;
        outline: 0 !important;
    }
`;
const Lines= styled(Box)`
    transition: all 0.3s ease-in-out;
`;
const MenuBox= styled(Box)`
    height: 30px;
    width:30px;
    padding:5px 0;
    display: none;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    position: relative;
    ${Lines}{
        height:2px;
        width: 100%;
        background-color: #000;
        border-radius: 4px;
        margin-bottom: 5px;
        transform-origin: center;
        &:last-child{
            margin-bottom:0;
        }
    }
    ${({MenuIsOpen}) => MenuIsOpen && `
        ${Lines}{
            position: absolute;
            left: 50%;
            top:50%;
            margin-bottom: 0;
            display: block;
            &:first-child{
                transform:translate(-50%,-50%) rotate(45deg);
            }
            &:nth-child(2n){
                display:none;
            }
            &:last-child{
                transform:translate(-50%,-50%) rotate(-45deg);
            }
        }
    `};
    @media only screen and (max-width : 767px){
        display: flex;
        position: absolute;
        top: 15px;
        right:0;
    }
`;
const Ul =styled.ul`
@media only screen and (max-width : 767px){
    width: 100%;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    ${({MenuIsOpen}) => MenuIsOpen && `
        max-height: 1000px;
    `}; 
}
`;
