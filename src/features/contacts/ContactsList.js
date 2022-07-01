import { CONTACTS } from "../../app/shared/CONTACTS";
import { Col, Row } from "reactstrap";
import ContactCard from "./ContactCard";

const ContactsList = () => {
  const sortedContacts = CONTACTS.sort((a, b) => {
    const result = a.firstName.localeCompare(b.firstName);

    return result !== 0 ? result : a.lastName.localeCompare(b.lastName);
  }).map((contact) => {
    return (
      <Row>
        <Col md='5' className='contactCardCol' key={contact.id}>
          <ContactCard contact={contact} />
        </Col>
      </Row>
    );
  });

  return <Row className='ms-auto mt-2'>{sortedContacts}</Row>;
};

export default ContactsList;
