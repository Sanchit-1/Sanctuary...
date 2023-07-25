import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Container=styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title=styled.h1`
    font-size: 70px;
    margin: 20px;
`
const Desc=styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign:"center"})}
`
const InputContainer=styled.div`
    width: 50%;

    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    
    ${mobile({width:"80%"})}


`
const Input=styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button=styled.button`
    
    border: none;
    background-color: teal;
    color: white;
    padding: 10px;
    align-content: center;
    justify-content: center;
    cursor: pointer;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const Textarea=styled.textarea`
    border: none;
    align-content: center;
    justify-content: center;
    width: 100%;
    
`
const Newsletter = () => {
    const form=useRef();
    const sendMail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_x8b1ydc', 'template_amzkp3f', form.current, '3-f7lxkP6stofwZl0')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
  return (
    <Container>
        <Title>Contact Us!!</Title>
        <Desc>Be it a valuable feedback or suggestion, we are only a click away!</Desc>
        <Form onSubmit={sendMail} ref={form}>
        <InputContainer>
            <Input placeholder='Subject' type='text' name='subject'/>
        </InputContainer>
        <InputContainer>
            <Input placeholder='Full Name' type='text' name='name'/>
        </InputContainer>   
        <InputContainer>
            <Input placeholder='Email' type='email' name='email'/>
        </InputContainer>
        
            <Textarea cols="20" rows="10" placeholder='Your Message' name='message'></Textarea>
            
            <Button type='submit'>
                <Send/>
            </Button>
        </Form>
    </Container>
  )
}

export default Newsletter
