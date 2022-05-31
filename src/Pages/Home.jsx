import CuisinesData from '../Components/CuisinesData';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Search from '../Components/Search';

export default function Home(){

    
    
    return(
        <>
       <Container>
            <Row>
                <Search/>
            </Row>
           <Row >
               <h2>Select Cuisine</h2>
               {CuisinesData.map((cuisine)=>{
                   return(
                    <Col key={cuisine.id} md={4}>                        
                        <StyledCard className="mt-2"  >
                        <StyledLink to={cuisine.to}>
                        {/* {cuisine.img &&<Card.Img variant="top" src={cuisine.img} />} */}
                        <Card.Body>
                            <Card.Title>{cuisine.name}</Card.Title>     
                            {/* <p>{cuisine.to}</p>                        */}
                        </Card.Body>
                        </StyledLink>
                        </StyledCard>
                    </Col>
                   )
               })}
               
           </Row>
       </Container>
       <Footer/>
       </>
    );
    }

const StyledLink = styled(Link)`
    text-decoration:none;
    color:white;
    text-align:center;

    &:hover{
        color:white;
    }
`

const StyledCard = styled(Card)`
    height : 10vh;
    display:flex;
    align-items: center;
    justify-content:center;
    background : linear-gradient(120deg, brown 90%,pink);
    border:0;

    &:hover{
        background : linear-gradient(120deg, brown 10%,pink);
        transition:0.5s all;
        cursor:pointer;
        text-decoration:none;
        color:black;

    }
`