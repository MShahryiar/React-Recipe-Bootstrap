import {useParams} from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {useState, useEffect} from 'react';

export default function Recipe(){

    let params = useParams();

    const [detail, setDetail] = useState({});
    const [recipeName, setRecipeName] = useState('');

    const getRecipe = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=9a76d0f86c974882ba9ce8d4d782c5ef`)
        const detailData = await data.json()
        setDetail(detailData);
        setRecipeName(detailData.title)
       

    }

    useEffect(()=>{
        getRecipe();
    },[params.name])

    return(
        <Container>
            <Row>
                <Col md={12}>                
                    <h1 className="my-4">Recipe : <u>{recipeName}</u></h1>
                    <Tabs defaultActiveKey="instructions" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="instructions" title="Instructions">
                            <Row>
                                <Col md={4}>
                                    { <img src={detail.image} alt={detail.title} className="img-fluid"/> }
                                </Col>
                                <Col md={8}>
                                <p dangerouslySetInnerHTML={{__html:detail.summary}}></p>
                                <p dangerouslySetInnerHTML={{__html:detail.instructions}}></p>
                                </Col>
                            </Row>
                        
                        </Tab>
                        <Tab eventKey="ingredients" title="Ingredients">
                            <h2>Ingredients</h2>
                            {/* {detail.extendedIngredients.map((ingredient)=>(
                        <li key={ingredient.id}>{ingredient.original}</li>
                             ))} */}
                        </Tab>
                    </Tabs>
                   
                </Col>
            </Row>
        </Container>
        
    );
}