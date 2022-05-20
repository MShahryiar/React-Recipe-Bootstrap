import CuisinesData from '../Components/CuisinesData';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function Home(){

    
    
    return(
       <Container>

           <Row >
               {CuisinesData.map((cuisine)=>{
                   return(
                    <Col key={cuisine.id} md={4}>                        
                        <Card className="mt-2" >
                        <StyledLink to={cuisine.to}>
                        {cuisine.img &&<Card.Img variant="top" src={cuisine.img} />}
                        <Card.Body>
                            <Card.Title>{cuisine.name}</Card.Title>     
                            {/* <p>{cuisine.to}</p>                        */}
                        </Card.Body>
                        </StyledLink>
                        </Card>
                    </Col>
                   )
               })}
               
           </Row>
       </Container>
          
        
    

    );
    }

const StyledLink = styled(Link)`
    text-decoration:none;
    color:#000000;
    text-align:center;
`