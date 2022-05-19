import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';


export default function Cuisine(){

    const [cuisine, setCuisine] = useState([]);

    let params = useParams();

    const getCuisine = async(name)=>{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=9a76d0f86c974882ba9ce8d4d782c5ef&number=9&tags=${name}`)
        const data = await api.json()        
        setCuisine(data.recipes)
        console.log(cuisine)


    }

    useEffect(()=>{
        getCuisine(params.name)
        
    },[])
    return(
        <>
            <Container>
                <Row>
            
                {cuisine.map((recipe)=>{
                    return(
                     <Col md={4}>                        
                        <Card className="mt-2" key={recipe.id}>                        
                        <Card.Body>
                            {recipe.image &&<Card.Img variant="top" src={recipe.image} />}
                            <Card.Title>{recipe.title}</Card.Title>                             
                        </Card.Body>                       
                        </Card>
                    </Col>
                    
                    )
                })}
               
            
                </Row>
            </Container>
        </>
    );
}