import { Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./ContactsVertical.css";
import { useSelector } from "react-redux";
const ContactsVertical = () => {
  const contactsCount = useSelector((state) => state.contactList).length;

  return (
    <div className='Vertical pb-5 mt-1'>
      <Col className='createCol'>
        <NavLink className='nav-link ms-0 ps-0 me-0' to='/create'>
          <a
            className='createBtn mb-2 mb-sm-5 ps-sm-3'
            aria-label='Create Contact'
            role='button'
          >
            <i
              className='fa fa-user-plus pe-sm-2 pe-md-3'
              aria-hidden='true'
            ></i>{" "}
            <span className='createContact' aria-hidden='true'>
              Create Contact
            </span>
          </a>
        </NavLink>
      </Col>
      <Col className='btnCol'>
        <NavLink className='nav-link ms-0 p-0 me-0' to='/'>
          <a
            className='text-primary active contactBtn'
            aria-label='Contacts'
            role='button'
            aria-pressed='true'
          >
            <i
              className='fa fa-user-o pe-2 pe-md-3 ps-md-1'
              aria-hidden='true'
            ></i>
            <span className='pe-2 pe-sm-4 pe-md-5' aria-hidden='true'>
              Contacts
            </span>
            <span aria-label={contactsCount}>{contactsCount}</span>
          </a>
        </NavLink>
      </Col>
    </div>
  );
};

export default ContactsVertical;
