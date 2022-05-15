import Container  from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Header(){
    return(
        <Container>
            <Row>
                <Col className="bg-light d-flex align-items-center justify-content-center" style={{height:'50vh'}}>
                    <h1 className="display-1">React-Bootstrap Recipe App </h1>
                </Col>
            </Row>
        </Container>
    );
}