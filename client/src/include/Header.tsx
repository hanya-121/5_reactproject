import {Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas} from 'react-bootstrap';
//{[false,'sm','md','lg','xl','xxl'].map((expand)=>(
const Header = () => {
    return(
        <> {/* false */}
{['sm'].map((expand)=>(
    <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container fluid>
            <Navbar.Brand href="#">로고</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
            <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                        오프캔버스 메뉴
                    </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                       <Nav.Link href="#">Home</Nav.Link> 
                       <Nav.Link href="#">Link</Nav.Link>
                       <NavDropdown title="고양이" 
                       id={`offcanvasNavbarLabel-expane-${expand}`}>
                        <NavDropdown.Item href="">겨울</NavDropdown.Item>
                        <NavDropdown.Item href="">봄</NavDropdown.Item>
                        <NavDropdown.Item href="">귀여워</NavDropdown.Item>
                       </NavDropdown>
                    </Nav>
                    {/* 검색창 만들기 */}
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="search"
                        className="me-2"
                        />
                        <Button variant="outline-success">
                            Search
                        </Button>
                    </Form>
                </Offcanvas.Body>

            </Navbar.Offcanvas>
        </Container>
</Navbar>
))}
        </>
    )
}
export default Header;

/* 
aria-controls 
$가 들어갈 땐 `` 넣어줘야 함
<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/> 햄버거 메뉴
placement배치위치="end" end오른쪽 start왼쪽
*/