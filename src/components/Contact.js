import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Box from './Layout/Box';
import styled from 'styled-components';
import {
    color
} from 'styled-system';
export default function Contact() {
    const [data, setData] = useState({
            fullName : "",
            number : "",
            email : "",
            message : ""
    });
    const [errors, setErrors] = useState({});
    const InputChange = (event) =>{
        const {name, value} = event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name] : value,
            };
        });
    };
    const HandleSubmit = (e) =>{
        e.preventDefault();
        const {fullName, number, email, message} = data;
        console.log (fullName, number, email, message);
        let formIsValid = true;
        let errors = {};
        if(fullName === ""){
            errors["fullName"] = "Please enter full name"
            formIsValid = false
        }
        if(number === ""){
            errors["number"] = "Please enter number"
            formIsValid = false
        }
        if(email === ""){
            errors["email"] = "Please enter email"
            formIsValid = false
        }
        if(message === ""){
            errors["message"] = "Please enter message"
            formIsValid = false
        }
        else{
            formIsValid = true
        }
        if(errors){
            setErrors(errors);
        }
        
        if(formIsValid){
            toast.success("Form is submitted successfully");
            setData({
                fullName : "",
                number : "",
                email : "",
                message : ""
            })
        }
    }
    
    return (
        <ContactUsBlock flex = {1}>
            <Box className = "my-5">
                <Heading className = "text-center" color = {'white'}>Contact Us</Heading>
            </Box>
            <Box className = "container" flex = {1}>
                <Box className = "row">
                    <Box className = "col-md-6 col-10 mx-auto" boxShadow={'0 6px 3px 0 rgba(0,0,0,0.29)'} bg={'white'} p={20} borderRadius={8}>
                        <form onSubmit = {HandleSubmit} noValidate>
                            <Box className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <InputContainer position={'relative'}>
                                <Input type="text" className="form-control" id="exampleFormControlInput1" name = "fullName" value = {data.fullName} onChange = {InputChange} placeholder="Enter your name"/>
                                <Box></Box>
                                </InputContainer>
                                <Span color = {'red'}>{errors.fullName}</Span>
                            </Box>

                            <Box className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                <InputContainer position={'relative'}>
                                <Input type="tel" className="form-control" id="exampleFormControlInput1" name = "number" value = {data.number} onChange = {InputChange} placeholder="Enter your number"/>
                                <Box></Box>
                                </InputContainer>
                                <Span color = {'red'}>{errors.number}</Span>
                            </Box>

                            <Box className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <InputContainer position={'relative'}>
                                <Input type="email" className="form-control" id="exampleFormControlInput1" name = "email" value = {data.email} onChange = {InputChange} placeholder="Enter your email"/>
                                <Box></Box>
                                </InputContainer>
                                <Span color = {'red'}>{errors.email}</Span>
                            </Box>

                            <Box className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <InputContainer position={'relative'}>
                                <TextArea className="form-control" id="exampleFormControlTextarea1" rows="3" name = "message" value = {data.message} onChange = {InputChange} />
                                <Box></Box>
                                </InputContainer>
                                <Span color = {'red'}>{errors.message}</Span>
                            </Box>

                            <Box className="col-12 mb-5">
                                <button className="btn btn-outline-primary" type="submit">Submit</button>
                            </Box>
                        </form>
                    </Box>
                </Box>
            </Box>
            <ToastContainer />
        </ContactUsBlock>
    )
}

const Span = styled.span`
${color}`;
const Input = styled.input`
    background-color: transparent;
    border: none;
    outline: 0;
    border-bottom: 1px solid #cacaca;
    border-radius: 0;
    transition: none;
    &:focus{
        box-shadow: none;
        background-color: transparent;
        border-color: transparent;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active
    {
        -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    }
`;
const TextArea = styled.textarea`
    background-color: transparent;
    border: none;
    outline: 0;
    border-bottom: 1px solid #cacaca;
    border-radius: 0;
    &:focus{
        box-shadow: none;
        background-color: transparent;
        border-color: transparent;
    }
    transition: none;
    &:focus{
        box-shadow: none;
        background-color: transparent;
        border-color: transparent;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active
    {
        -webkit-box-shadow: 0 0 0 30px #d2dbdd inset !important;
    }
`;
const InputContainer = styled(Box)`
    > div{
        width: 100%;
        max-width:0;
        transition: all 0.3s ease-in-out;
    }
    ${Input},${TextArea}{
        &:focus + div{
            max-width: 100%;
            box-shadow: 0 0 0 0.5px #0d6efd;
        }

    }
`;
const ContactUsBlock = styled(Box)`
    position: relative;
    > div{
        position: relative;
        z-index: 1;
    }
    &::before{
        content:'';
        height: 30%;
        width: 100%;
        display: block;
        position: absolute;
        top: 0;
        background-image:url('asset/images/img2.jpg');
        background-size:100%;
        background-attachment:fixed;
        background-repeat: no-repeat;
    }
`;
const Heading = styled.h1`
    ${color}
`;