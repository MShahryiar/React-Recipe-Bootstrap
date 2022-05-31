import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from '../Components/Footer';

export default function Searched(){
    const params = useParams();
    const [searched, setSearched] = useState([]);

    const getSearchedRecipe = async(name) => {
        const api =  await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9a76d0f86c974882ba9ce8d4d782c5ef&query=${name}&number=9`);
        const data = await api.json();
        setSearched(data.results)
    }
    
    useEffect(()=>{
        getSearchedRecipe(params.search);
        
    },[params.search])
    return( 
        <>
          <Container>
            <Row>
                {searched.map((recipe)=>(
                    <Col md={4} key={recipe.id}>
                        <StyledLink to={'/recipe/'+recipe.id}>
                            <Card key={recipe.id}>
                                <Card.Body>
                                    {recipe.image && <Card.Img variant='top'  src={recipe.image} />}
                                    <Card.Title><small>{recipe.title}</small></Card.Title>
                                </Card.Body>
                            </Card>
                        </StyledLink>                       
                    </Col>
                ))}
            </Row>
        </Container>

        <Footer/>
    </>

    )
}

const StyledLink = styled(Link)`
    text-decoration:none;
    color:black;
    text-align:center;

    &:hover{
        color:black;
    }
`