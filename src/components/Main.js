import ContactsList from "../features/contacts/ContactsList";
import ContactsVertical from "../features/contacts/ContactsVertical";
import Header from "./Header";
import { Col, Row } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import CreatePage from "./CreatePage";

const Main = () => {
  return (
    <>
      <Header />
      <Row>
        <Col xs='6' sm='5' md='4' lg='3' className='VerticalCol'>
          <ContactsVertical />
        </Col>
        <Col xs='6' sm='7' md='8' lg='7'>
          <Routes>
            <Route path='/' element={<ContactsList />} />
            <Route path='create' element={<CreatePage />} />
            <Route path='edit' element={<CreatePage />} />
          </Routes>
        </Col>
      </Row>
      {/* <Row>
        <Col xs='6' sm='5' md='4' lg='3' className='VerticalCol'>
          <ContactsVertical />
        </Col>
        <Col xs='6' sm='7' md='8' lg='7'>
          <CreatePage />
          <ContactsList />
        </Col>
      </Row> */}
    </>
  );
};

export default Main;
