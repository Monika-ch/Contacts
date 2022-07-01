import { CONTACTS } from '../../app/shared/CONTACTS';
import { Col, Row } from "reactstrap";
import ContactCard from './ContactCard';

const ContactsList = () => {
  return (
    <Row className='ms-auto'>
      {CONTACTS.map((contact) => {
        return (
          <Col md='2' className='m-1' key={contact.id}>
            <ContactCard contact={contact} />
          </Col>
        )
      })}
    </Row>
  )
}

export default ContactsList;