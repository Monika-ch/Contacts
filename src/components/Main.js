import ContactsList from "../features/contacts/ContactsList";
import ContactsVertical from "../features/contacts/ContactsVertical";
import Header from "./Header";
import { Col, Row } from "reactstrap";

const Main = () => {
  return (
    <>
      <Header />
      <Row>
        <Col xs='6' sm='5' md='4' lg='3'className="VerticalCol">
          <ContactsVertical />
        </Col>
        <Col xs='6' sm='7' md='8' lg='7'>
          <ContactsList />
        </Col>
      </Row>
    </>
  );
}

export default Main;
