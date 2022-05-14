import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export default function Home(){
    return(
        <Container className="bg-light">
            <Row className='text-center'>
                <Col >
                    <h1>React Recipe App Bootstrap</h1>
                </Col>
            </Row>
        </Container>

    );
}