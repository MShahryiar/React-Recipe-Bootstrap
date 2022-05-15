import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import styled from 'styled-components';
import french from '../images/french.jpg';

export default function Home(){
    
    return(
        <Container className="py-5 mt-2 rounded">
            <Row className='text-center'>
                <Col>
                    <CardWrapper>
                        <CardBody className='rounded'>
                            <Card.Title className="position-absolute display-2">American</Card.Title>
                            <img src={french}/>  

                        </CardBody>
                   </CardWrapper>
                   <CardWrapper>
                        <CardBody className='rounded'>
                            <Card.Title className="position-absolute display-2">French</Card.Title>
                            <img src={french}/> 
                        </CardBody>
                   </CardWrapper>
                   <CardWrapper>
                        <CardBody className='rounded'>
                            <Card.Title className="position-absolute display-2">Italian</Card.Title>
                            <img src={french}/> 

                        </CardBody>
                   </CardWrapper>
                   <CardWrapper>
                        <CardBody className='rounded'>
                            <Card.Title className="position-absolute display-2">Mexican</Card.Title>
                            <img src={french}/> 

                        </CardBody>
                   </CardWrapper>
                   <CardWrapper>
                        <CardBody className='rounded'>
                            <Card.Title className="position-absolute display-2">Thai</Card.Title>
                            <img src={french}/> 

                        </CardBody>
                   </CardWrapper>
                </Col>
                
            </Row>
        </Container>

    );
}

const CardWrapper = styled(Card)`
    margin-top:10px;
    margin-bottom:10px;
`

const CardBody = styled(Card.Body)`
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    height:20vh;

    &:hover{
        cursor:pointer;
        transition:0.8s all;
        box-shadow: 0px 1px 22px -4px rgba(0, 0, 0, 0.5);
        -webkit-box-shadow: 0px 1px 22px -4px rgba(0, 0, 0, 0.5);

        img{
            display:none;
            transition:1s all;
        }
    }
    img{
        width:100%;
        height:100%;
        z-index:2;
        position:'absolute';
    }
`