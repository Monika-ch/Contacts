import ContactsList from "../features/contacts/ContactsList";
import Header from "./Header";
import { Col, Row } from "reactstrap";

const Main = () => {
  return (
    <>
      <Header />
      <Row>
        <Col sm='4'>
          {/* < ContactVertical /> */}
        </Col>
        <Col>
          <ContactsList />
        </Col>
      </Row>
    </>
  );
}

export default Main;
