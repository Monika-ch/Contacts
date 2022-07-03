import { CONTACTS } from "../../app/shared/CONTACTS";
import { Col } from "reactstrap";
import "./ContactsVertical.css";

const ContactsVertical = () => {
  const contactsCount = CONTACTS.length;

  return (
    <div className='Vertical pb-5 mt-2'>
      <Col className='createCol'>
        <a className='createBtn mb-2 mb-sm-5' aria-hidden='true'>
          <i className='fa fa-user-plus pe-sm-2 pe-md-3' aria-hidden='true'></i>{" "}
          <span className='createContact' aria-label='Create Contact'>
            Create Contact
          </span>
        </a>
      </Col>
      <Col className='btnCol'>
        <a
          className='text-primary active contactBtn'
          aria-hidden='true'
          role='button'
          aria-pressed='true'
        >
          <i className='fa fa-user-o pe-2 pe-md-3 ps-md-2' aria-hidden='true'></i>
          <span className='pe-4 pe-md-5' aria-label='Contacts'>
            Contacts
          </span>
          <span aria-label={contactsCount}>{contactsCount}</span>
        </a>
      </Col>
      {/* </Row> */}
    </div>
  );
};

export default ContactsVertical;
