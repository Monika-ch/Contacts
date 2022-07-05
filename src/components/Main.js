import ContactsList from "../features/contacts/ContactsList";
import ContactsVertical from "../features/contacts/ContactsVertical";
import Header from "./Header";
import { Col, Row } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import CreateEditPage from "./CreateEditPage";
import "./Main.css";

const Main = () => {
  return (
    <>
      <Header />
      <Row className='ps-0 ps-sm-auto'>
        <Col xs='3' sm='6' md='4' lg='3' className='VerticalCol'>
          <ContactsVertical />
        </Col>
        <Col xs='7' sm='6' md='6' lg='6' xl='6' className='MainContent'>
          <Routes>
            <Route path='/' element={<ContactsList />} />
            <Route path='create' element={<CreateEditPage />} />
            <Route path='edit'>
              <Route path=':id' element={<CreateEditPage />} />
            </Route>
          </Routes>
        </Col>
      </Row>
    </>
  );
};

export default Main;
