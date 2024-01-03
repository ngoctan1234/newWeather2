import React, { useEffect, useState } from "react";
import { Button, Table, Modal, ModalHeader, ModalFooter, ModalBody, FormGroup, Form, Input, Label, Container, Row } from "reactstrap";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Col } from "reactstrap";
export default function ReactStr() {
    const [show, setShow] = useState(false);
    const handle_show = () => setShow(!show);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [thu, setThu] = useState(null);

    function LayThu() {
        var date = new Date();

        // Lấy số thứ tự của ngày hiện tại
        var current_day = date.getDay();

        // Biến lưu tên của thứ
        var day_name = "";

        // Lấy tên thứ của ngày hiện tại
        switch (current_day) {
            case 0:
                day_name = "Chủ nhật";
                break;
            case 1:
                day_name = "Thứ hai";
                break;
            case 2:
                day_name = "Thứ ba";
                break;
            case 3:
                day_name = "Thứ tư";
                break;
            case 4:
                day_name = "Thứ năm";
                break;
            case 5:
                day_name = "Thứ sau";
                break;
            case 6:
                day_name = "Thứ bảy";
        }
        setThu(day_name);
    }
    useEffect(() => {
        LayThu();
    }, []);
    return (
        <div>
            <h1>Thứ: {thu}</h1>
            <Button onClick={toggle}>Show modal</Button>
            <button>Mèo</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
            <Navbar color="faded" light expand="sm">
                <NavbarBrand href="/" className="me-auto">
                    reactstrap
                </NavbarBrand>
                <NavbarToggler onClick={handle_show} className="me-2" />
                <Collapse isOpen={show} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Shopping</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup floating>
                            <Input id="exampleEmail" name="email" placeholder="Email" type="email" />
                            <Label for="exampleEmail">Email</Label>
                        </FormGroup>
                        <FormGroup floating>
                            <Input id="examplePassword" name="password" placeholder="Password" type="text" />
                            <Label for="examplePassword">Phone number</Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                        Buy now
                    </Button>
                    <Button color="danger" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            <Container>
                <Row>
                    <Col sm="6" md="4" lg="2">
                        Col
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        Col
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        Col
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        Col
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        Col
                    </Col>
                    <Col sm="6" md="4" lg="2">
                        Col
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
