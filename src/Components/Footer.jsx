import Container  from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer(){
    return(
        <Container>
            <Row>
                <Col className="bg-dark text-white mt-5 p-3 d-flex align-items-center justify-content-center">
                    <h6>Developed by: Muhammad Shahryiar </h6>
                </Col>
            </Row>
        </Container>
    );
}